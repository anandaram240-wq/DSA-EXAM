import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

const theoryData = [
  {
    id: 1,
    title: 'Stack — Definition, ADT, Operations',
    module: 'Module 1',
    color: '#ef4444',
    frequency: 8,
    content: [
      {
        heading: 'Definition',
        text: 'A Stack is a linear data structure that follows the LIFO (Last In First Out) principle. Elements are inserted and removed from the same end called the TOP.'
      },
      {
        heading: 'ADT (Abstract Data Type)',
        text: `Stack ADT defines:
• Data: A collection of elements + top pointer
• Operations:
  - push(x): Insert element x at top
  - pop(): Remove and return top element
  - peek()/top(): Return top element without removing
  - isEmpty(): Returns true if stack is empty
  - isFull(): Returns true if stack is full`
      },
      {
        heading: 'Applications of Stack',
        text: `1. Expression evaluation (postfix)
2. Expression conversion (infix→postfix/prefix)
3. Function call management (activation records)
4. Undo/Redo operations
5. Backtracking algorithms
6. Palindrome checking
7. Balanced parentheses checking`
      }
    ]
  },
  {
    id: 2,
    title: 'Infix → Postfix Algorithm (Complete Trace Method)',
    module: 'Module 1',
    color: '#ef4444',
    frequency: 8,
    content: [
      {
        heading: 'Algorithm',
        text: `1. Scan infix expression left to right
2. If OPERAND → add to postfix output
3. If '(' → push onto stack
4. If ')' → pop and add to output until '(' is found; discard '('
5. If OPERATOR →
   a. While stack not empty AND top is not '(' AND prec(top) >= prec(current):
      pop and add to output
   b. Push current operator
6. After scanning: pop all remaining operators to output

Precedence (highest to lowest):
  $ (power) → 3
  * / %     → 2
  + -       → 1

Associativity: $ is Right-to-Left, rest are Left-to-Right`
      },
      {
        heading: 'Trace Table Format',
        text: `For expression: (A+B)*C-D
Symbol | Stack (bottom→top) | Postfix Output
---    | ---                | ---
(      | (                  |
A      | (                  | A
+      | ( +                | A
B      | ( +                | A B
)      | (empty)            | A B +
*      | *                  | A B +
C      | *                  | A B + C
-      | -                  | A B + C *
D      | -                  | A B + C * D
END    | (empty)            | A B + C * D -
Result: AB+C*D-`
      }
    ]
  },
  {
    id: 3,
    title: 'Recursion — Types and Tower of Hanoi',
    module: 'Module 2',
    color: '#f97316',
    frequency: 6,
    content: [
      {
        heading: 'Definition of Recursion',
        text: 'Recursion is a process where a function calls itself directly or indirectly to solve a problem. Every recursive function must have: 1) Base Case (termination condition), 2) Recursive Case (moves towards base case).'
      },
      {
        heading: 'Types of Recursion',
        text: `1. Direct Recursion: f() calls f() directly
   Example: int fact(int n){ return n*fact(n-1); }

2. Indirect Recursion: f() calls g() and g() calls f()
   Example: f() → g() → f()

3. Tail Recursion: Recursive call is the LAST statement
   Example: f(n) { if(n==0) return; f(n-1); } ← last operation

4. Non-Tail Recursion: Operations after recursive call
   Example: f(n) { return n + f(n-1); } ← addition after recursion

5. Linear Recursion: Only ONE recursive call per invocation
   Example: factorial, fibonacci (with single call)

6. Tree Recursion: MULTIPLE recursive calls per invocation
   Example: fib(n) = fib(n-1) + fib(n-2) ← TWO calls`
      },
      {
        heading: 'Tower of Hanoi Algorithm',
        text: `Problem: Move N disks from Source (A) to Destination (C) using Auxiliary (B).
Rule: Never place larger disk on smaller disk.

Algorithm:
hanoi(n, from, to, aux):
  if n == 0: return
  hanoi(n-1, from, aux, to)  // Move n-1 disks A→B
  print "Move disk n from from to to"
  hanoi(n-1, aux, to, from)  // Move n-1 disks B→C

For n=3 disks (7 moves total = 2³-1):
  Move 1: A→C
  Move 2: A→B
  Move 3: C→B
  Move 4: A→C
  Move 5: B→A
  Move 6: B→C
  Move 7: A→C`
      }
    ]
  },
  {
    id: 4,
    title: 'Circular Queue — Complete Algorithm',
    module: 'Module 2',
    color: '#f97316',
    frequency: 6,
    content: [
      {
        heading: 'Why Circular Queue?',
        text: 'In linear queue, even if front elements are dequeued, rear cannot go beyond MAX-1. This wastes memory. Circular queue reuses the freed slots by wrapping around using modulo arithmetic.'
      },
      {
        heading: 'Conditions',
        text: `Empty: front == -1
Full:  (rear + 1) % MAX == front
Size:  MAX elements

Insert (Enqueue):
  if full: print overflow
  if empty: front = rear = 0
  else: rear = (rear + 1) % MAX
  cq[rear] = item

Delete (Dequeue):
  if empty: print underflow
  item = cq[front]
  if front == rear: front = rear = -1 (single element)
  else: front = (front + 1) % MAX
  return item`
      },
      {
        heading: 'Types of Queues',
        text: `1. Linear Queue: Simple FIFO, front/rear only move forward
2. Circular Queue: front/rear wrap around (solves memory waste)
3. Double-Ended Queue (Deque): Insert/delete from BOTH ends
   - Input Restricted Deque: insert at one end, delete from both
   - Output Restricted Deque: insert from both, delete from one
4. Priority Queue: Each element has a priority; highest priority served first`
      }
    ]
  },
  {
    id: 5,
    title: 'Singly Linked List — All Operations',
    module: 'Module 2',
    color: '#f97316',
    frequency: 8,
    content: [
      {
        heading: 'Structure of SLL Node',
        text: `struct Node {
    int data;
    struct Node* next;
};

Node has DATA + NEXT pointer (address of next node).
Last node's NEXT = NULL.
HEAD pointer points to first node.`
      },
      {
        heading: 'Key Operations Summary',
        text: `INSERT AT BEGINNING:
  newNode->next = head
  head = newNode

INSERT AT END:
  Traverse to last (last->next == NULL)
  last->next = newNode

INSERT AFTER NODE X:
  Find node with data==X
  newNode->next = X->next
  X->next = newNode

DELETE FIRST:
  temp = head
  head = head->next
  free(temp)

DELETE LAST:
  Traverse to 2nd-last node
  2nd-last->next = NULL
  free(last)

DELETE NODE WITH VALUE V:
  Find node before V (prev)
  prev->next = targetNode->next
  free(targetNode)

DISPLAY: Traverse from head to NULL, print each data.
SEARCH: Traverse, compare each data with key.
COUNT: Traverse, increment counter.`
      }
    ]
  },
  {
    id: 6,
    title: 'AVL Tree — All 4 Rotations',
    module: 'Module 4',
    color: '#22c55e',
    frequency: 9,
    content: [
      {
        heading: 'What is an AVL Tree?',
        text: `AVL (Adelson-Velsky and Landis) tree is a self-balancing BST.
Balance Factor (BF) = Height(Left Subtree) - Height(Right Subtree)
For every node: BF must be -1, 0, or +1
If |BF| > 1 after insertion → perform rotation to rebalance.`
      },
      {
        heading: 'LL Case (Left-Left) → Right Rotate',
        text: `When: New node inserted in LEFT subtree of LEFT child
Action: Single RIGHT ROTATION at unbalanced node

    z              y
   / \\           /  \\
  y   T4  →    x    z
 / \\          /\\  / \\
x   T3       T1 T2 T3 T4

y becomes new root, z becomes right child of y.`
      },
      {
        heading: 'RR Case (Right-Right) → Left Rotate',
        text: `When: New node inserted in RIGHT subtree of RIGHT child
Action: Single LEFT ROTATION at unbalanced node

  z                y
 / \\             /  \\
T1  y    →      z    x
   / \\         /\\   /\\
  T2  x       T1 T2 T3 T4
     /\\

y becomes new root, z becomes left child of y.`
      },
      {
        heading: 'LR Case (Left-Right) → Left then Right Rotate',
        text: `When: New node inserted in RIGHT subtree of LEFT child
Action: First LEFT ROTATE on left child, then RIGHT ROTATE on node

Step 1: Left rotate y (left child of z)
Step 2: Right rotate z

    z               z              x
   /               /             /  \\
  y       →       x      →     y    z
   \\             /
    x            y`
      },
      {
        heading: 'RL Case (Right-Left) → Right then Left Rotate',
        text: `When: New node inserted in LEFT subtree of RIGHT child
Action: First RIGHT ROTATE on right child, then LEFT ROTATE on node

Step 1: Right rotate y (right child of z)
Step 2: Left rotate z

  z                z              x
   \\                \\           /  \\
    y      →         x    →    z    y
   /                  \\
  x                    y`
      },
      {
        heading: 'Insertion Trace: 63, 9, 19, 27, 18, 108, 99, 81',
        text: `Insert 63: Tree = 63 (BF=0)
Insert 9:  Tree = 63(L:9) → BF(63)=1 ✓
Insert 19: BF(63)=2, BF(9)=-1 → LR CASE at 63
  Left rotate at 9, Right rotate at 63
  Result: 19(L:9, R:63)

Insert 27: 19(9,63→27) → BF all valid
Insert 18: BF(63)=-2, BF(27)=1 → RL CASE at 63
  Right rotate at 27, Left rotate at 63
  Result: 18 moved up

Insert 108: Simple BST insert, BF valid
Insert 99: BF issues → RL CASE
Insert 81: Causes RR or RL case

Final inorder: 9, 18, 19, 27, 63, 81, 99, 108`
      }
    ]
  },
  {
    id: 7,
    title: 'Binary Search Tree (BST)',
    module: 'Module 4',
    color: '#22c55e',
    frequency: 6,
    content: [
      {
        heading: 'BST Property',
        text: `For every node N in BST:
  • All nodes in N's LEFT subtree < N's data
  • All nodes in N's RIGHT subtree > N's data
  • No duplicates

Inorder traversal of BST always gives SORTED sequence.`
      },
      {
        heading: 'Construction: 45, 39, 56, 12, 34, 78, 32, 10, 89, 54, 67, 81',
        text: `Root = 45
39 < 45 → LEFT of 45
56 > 45 → RIGHT of 45
12 < 45, 12 < 39 → LEFT of 39
34 > 12, 34 < 39 → RIGHT of 12
78 > 45, 78 > 56 → RIGHT of 56
32 < 34 → LEFT of 34
10 < 12 → LEFT of 12
89 > 78 → RIGHT of 78
54 < 56 → LEFT of 56
67 > 56, 67 < 78 → LEFT of 78
81 > 78 → LEFT of 89

Inorder: 10,12,32,34,39,45,54,56,67,78,81,89`
      },
      {
        heading: 'Search Algorithm',
        text: `search(root, key):
  if root == NULL: return "Not Found"
  if key == root->data: return root
  if key < root->data: return search(root->left, key)
  else: return search(root->right, key)

Time: O(h) where h = height of tree
Best case: O(log n) for balanced BST
Worst case: O(n) for skewed BST`
      }
    ]
  },
  {
    id: 8,
    title: 'Circular & Doubly Linked List',
    module: 'Module 3',
    color: '#eab308',
    frequency: 7,
    content: [
      {
        heading: 'Circular Linked List',
        text: `Circular LL: Last node's NEXT points back to HEAD (not NULL).

Advantages over Ordinary LL:
1. Can traverse entire list from any node
2. Efficient for round-robin scheduling
3. No need to check for NULL (use head as sentinel)
4. Easy to implement queues

Types:
• Singly Circular LL: each node has one next pointer
• Doubly Circular LL: each node has prev and next`
      },
      {
        heading: 'CLL Insert at Beginning',
        text: `insertBegin(item):
  newNode->data = item
  if head == NULL:
    newNode->next = newNode
    head = newNode
    return
  // find last node
  last = head
  while (last->next != head): last = last->next
  newNode->next = head
  last->next = newNode
  head = newNode`
      },
      {
        heading: 'Doubly Linked List Advantages',
        text: `DLL advantages over SLL:
1. Can traverse in BOTH directions (forward and backward)
2. Delete a node WITHOUT traversing from head (just use prev pointer)
3. Easier insertion before a given node
4. Used in browser history (back/forward)

DLL Node: [PREV | DATA | NEXT]
head->prev = NULL, last->next = NULL`
      },
      {
        heading: 'DLL Delete First Node',
        text: `deleteFirst():
  if head == NULL: return (empty)
  temp = head
  head = head->next
  if head != NULL:
    head->prev = NULL
  free(temp)

DLL Insert After Given Node (key):
  Find node with data == key
  newNode->next = key->next
  newNode->prev = key
  if key->next != NULL:
    key->next->prev = newNode
  key->next = newNode`
      }
    ]
  },
  {
    id: 9,
    title: 'Tree Traversals — Inorder, Preorder, Postorder',
    module: 'Module 4',
    color: '#22c55e',
    frequency: 5,
    content: [
      {
        heading: 'Three Standard Traversals',
        text: `1. INORDER (L → Root → R):
   Visit left subtree, then root, then right subtree
   → For BST: gives elements in SORTED order
   
2. PREORDER (Root → L → R):
   Visit root first, then left, then right
   → Used to: CREATE/COPY a tree
   
3. POSTORDER (L → R → Root):
   Visit left, then right, then root last
   → Used to: DELETE a tree, Evaluate expression trees`
      },
      {
        heading: 'Algorithm (C Pseudocode)',
        text: `inorder(root):
  if root != NULL:
    inorder(root->left)
    print root->data
    inorder(root->right)

preorder(root):
  if root != NULL:
    print root->data
    preorder(root->left)
    preorder(root->right)

postorder(root):
  if root != NULL:
    postorder(root->left)
    postorder(root->right)
    print root->data`
      },
      {
        heading: 'Expression Tree',
        text: `Expression tree for: a + b / c * d - e

Traversals:
• Inorder: a + b / c * d - e  (original infix with parentheses)
• Preorder: gives PREFIX (Polish) notation
• Postorder: gives POSTFIX (Reverse Polish) notation

Evaluate: For a=30,b=10,c=2,d=30,e=10:
  b/c = 10/2 = 5
  5*d = 5*30 = 150
  a+150 = 30+150 = 180
  180-e = 180-10 = 170`
      }
    ]
  },
]

export default function Theory() {
  const [openItems, setOpenItems] = useState({ 0: true })
  const [activeModule, setActiveModule] = useState('all')
  const toggle = (i) => setOpenItems(prev => ({ ...prev, [i]: !prev[i] }))

  const filtered = activeModule === 'all'
    ? theoryData
    : theoryData.filter(t => t.module === activeModule)

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Theory</h1>
        <p className="page-subtitle">Complete DSA theory — definitions, algorithms, traces, exam answers</p>
      </div>

      <div className="tabs mb-20">
        {['all','Module 1','Module 2','Module 3','Module 4'].map(m => (
          <button key={m} className={`tab ${activeModule===m?'active':''}`} onClick={() => setActiveModule(m)}>
            {m === 'all' ? 'All Modules' : m}
          </button>
        ))}
      </div>

      {filtered.map((item, i) => {
        const isOpen = openItems[i]
        return (
          <div key={i} className={`accordion-item mb-12 ${isOpen ? 'open' : ''}`}
            style={{borderLeft:`3px solid ${item.color}`}}>
            <div className="accordion-header" onClick={() => toggle(i)}>
              <div style={{flex:1}}>
                <div className="flex items-center gap-8">
                  <div className="accordion-title">{item.title}</div>
                  <span className="badge badge-muted">{item.module}</span>
                </div>
                <div style={{fontSize:12,color:'var(--text-muted)',marginTop:2}}>
                  Appeared {item.frequency}× in papers
                </div>
              </div>
              <div className="accordion-meta">
                {item.frequency >= 7 && <span className="badge badge-critical">🔥 MUST KNOW</span>}
                {isOpen ? <ChevronDown size={16} color="var(--text-muted)" /> : <ChevronRight size={16} color="var(--text-muted)" />}
              </div>
            </div>
            {isOpen && (
              <div className="accordion-body">
                {item.content.map((section, si) => (
                  <div key={si} style={{marginBottom: si < item.content.length-1 ? 20 : 0}}>
                    <div style={{
                      fontSize: 12, fontWeight: 700, color: item.color,
                      textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 8
                    }}>
                      {section.heading}
                    </div>
                    <pre style={{
                      fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.8,
                      fontFamily: 'inherit', whiteSpace: 'pre-wrap', wordBreak: 'break-word',
                      background: 'rgba(255,255,255,0.02)', borderRadius: 8, padding: '12px 14px',
                      border: '1px solid rgba(255,255,255,0.04)'
                    }}>
                      {section.text}
                    </pre>
                    {si < item.content.length - 1 && <hr className="divider" />}
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
