// DSA Programs Data — All must-know C programs with complete code
export const programs = [
  {
    id: 1,
    title: "Stack — Push, Pop, Display using Array",
    module: "Module 1",
    topic: "Stack Operations",
    frequency: 8,
    explanation: "A stack uses LIFO (Last In First Out) principle. Uses a top pointer to track the topmost element. Push increments top then inserts. Pop reads then decrements top. Peek just reads top without removing.",
    code: `#include<stdio.h>
#define MAX 10

int stack[MAX], top = -1;

void push(int item) {
    if (top == MAX - 1)
        printf("Stack Overflow!\\n");
    else {
        top++;
        stack[top] = item;
        printf("Pushed: %d\\n", item);
    }
}

int pop() {
    if (top == -1) {
        printf("Stack Underflow!\\n");
        return -1;
    }
    return stack[top--];
}

int peek() {
    if (top == -1) {
        printf("Stack is empty!\\n");
        return -1;
    }
    return stack[top];
}

void display() {
    int i;
    if (top == -1) {
        printf("Stack is empty!\\n");
        return;
    }
    printf("Stack (top->bottom): ");
    for (i = top; i >= 0; i--)
        printf("%d ", stack[i]);
    printf("\\n");
}

void main() {
    push(10);
    push(20);
    push(30);
    display();
    printf("Popped: %d\\n", pop());
    printf("Peek: %d\\n", peek());
    display();
}`
  },
  {
    id: 2,
    title: "Infix to Postfix Conversion",
    module: "Module 1",
    topic: "Infix to Postfix Conversion using Stack",
    frequency: 8,
    explanation: "Algorithm: Scan infix left to right. If operand → output. If '(' → push. If ')' → pop until '('. If operator → pop operators of >= precedence, then push current. At end, pop all. Precedence: $ > * / % > + -",
    code: `#include<stdio.h>
#include<string.h>

char stack[50];
int top = -1;

void push(char c) { stack[++top] = c; }
char pop()        { return stack[top--]; }
char peek()       { return stack[top]; }

int prec(char c) {
    if (c == '$') return 3;
    if (c == '*' || c == '/' || c == '%') return 2;
    if (c == '+' || c == '-') return 1;
    return 0;
}

int isOperand(char c) {
    return (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z');
}

void infixToPostfix(char infix[]) {
    int i, k = 0;
    char postfix[50];
    char ch;
    for (i = 0; infix[i] != '\\0'; i++) {
        ch = infix[i];
        if (isOperand(ch)) {
            postfix[k++] = ch;
        } else if (ch == '(') {
            push(ch);
        } else if (ch == ')') {
            while (top != -1 && peek() != '(')
                postfix[k++] = pop();
            if (top != -1) pop(); /* remove '(' */
        } else { /* operator */
            while (top != -1 && peek() != '(' && prec(peek()) >= prec(ch))
                postfix[k++] = pop();
            push(ch);
        }
    }
    while (top != -1)
        postfix[k++] = pop();
    postfix[k] = '\\0';
    printf("Postfix: %s\\n", postfix);
}

void main() {
    char infix[50];
    printf("Enter infix expression: ");
    scanf("%s", infix);
    infixToPostfix(infix);
}`
  },
  {
    id: 3,
    title: "Postfix Expression Evaluation",
    module: "Module 1",
    topic: "Postfix Expression Evaluation using Stack",
    frequency: 7,
    explanation: "Scan postfix left to right. If operand → push. If operator → pop two operands (b=pop(), a=pop()), compute a OP b, push result. Final stack top is the answer.",
    code: `#include<stdio.h>
#include<math.h>

int stack[50];
int top = -1;

void push(int x) { stack[++top] = x; }
int pop()        { return stack[top--]; }

int evaluatePostfix(char expr[]) {
    int i, a, b, result;
    char ch;
    for (i = 0; expr[i] != '\\0'; i++) {
        ch = expr[i];
        if (ch == ' ') continue;
        if (ch >= '0' && ch <= '9') {
            push(ch - '0');
        } else {
            b = pop();
            a = pop();
            if      (ch == '+') result = a + b;
            else if (ch == '-') result = a - b;
            else if (ch == '*') result = a * b;
            else if (ch == '/') result = a / b;
            else if (ch == '$') result = (int)pow(a, b);
            push(result);
        }
    }
    return pop();
}

void main() {
    /* Example: 2 3 1 * + 9 - */
    char expr[] = "231*+9-";
    printf("Postfix: %s\\n", expr);
    printf("Result = %d\\n", evaluatePostfix(expr));
}`
  },
  {
    id: 4,
    title: "Stack using Linked List — Push, Pop",
    module: "Module 3",
    topic: "Stack Implementation Using Linked List",
    frequency: 5,
    explanation: "Linked list stack: each node has data + next pointer. TOP points to head. Push: create new node, point to old top, update top. Pop: save top data, move top to next, free old node.",
    code: `#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* top = NULL;

void push(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = item;
    newNode->next = top;
    top = newNode;
    printf("Pushed: %d\\n", item);
}

int pop() {
    struct Node* temp;
    int item;
    if (top == NULL) {
        printf("Stack Underflow!\\n");
        return -1;
    }
    temp = top;
    item = top->data;
    top = top->next;
    free(temp);
    return item;
}

void display() {
    struct Node* ptr = top;
    printf("Stack: ");
    while (ptr != NULL) {
        printf("%d -> ", ptr->data);
        ptr = ptr->next;
    }
    printf("NULL\\n");
}

void main() {
    push(10);
    push(20);
    push(30);
    display();
    printf("Popped: %d\\n", pop());
    display();
}`
  },
  {
    id: 5,
    title: "Queue — Enqueue, Dequeue using Array",
    module: "Module 2",
    topic: "Queue and Circular Queue Operations",
    frequency: 7,
    explanation: "Queue uses FIFO (First In First Out). front points to deletion end, rear to insertion end. Enqueue: increment rear, insert. Dequeue: read front, increment front. Queue full: rear == MAX-1. Empty: front == -1.",
    code: `#include<stdio.h>
#define MAX 5

int queue[MAX], front = -1, rear = -1;

void enqueue(int item) {
    if (rear == MAX - 1) {
        printf("Queue Full!\\n");
        return;
    }
    if (front == -1) front = 0;
    rear++;
    queue[rear] = item;
    printf("Enqueued: %d\\n", item);
}

int dequeue() {
    int item;
    if (front == -1 || front > rear) {
        printf("Queue Empty!\\n");
        return -1;
    }
    item = queue[front];
    front++;
    if (front > rear) front = rear = -1;
    return item;
}

void display() {
    int i;
    if (front == -1) { printf("Queue Empty!\\n"); return; }
    printf("Queue: ");
    for (i = front; i <= rear; i++)
        printf("%d ", queue[i]);
    printf("\\n");
}

void main() {
    enqueue(10); enqueue(20); enqueue(30);
    display();
    printf("Dequeued: %d\\n", dequeue());
    display();
}`
  },
  {
    id: 6,
    title: "Circular Queue — Insert, Delete, Display",
    module: "Module 2",
    topic: "Queue and Circular Queue Operations",
    frequency: 6,
    explanation: "Circular Queue reuses empty front positions. Full condition: (rear+1)%MAX == front. Empty: front == -1. After enqueue/dequeue: rear=(rear+1)%MAX and front=(front+1)%MAX respectively.",
    code: `#include<stdio.h>
#define MAX 5

int cq[MAX], front = -1, rear = -1;

void insert(int item) {
    if ((rear + 1) % MAX == front) {
        printf("Circular Queue Full!\\n");
        return;
    }
    if (front == -1) { front = 0; rear = 0; }
    else rear = (rear + 1) % MAX;
    cq[rear] = item;
    printf("Inserted: %d\\n", item);
}

int deleteItem() {
    int item;
    if (front == -1) {
        printf("Circular Queue Empty!\\n");
        return -1;
    }
    item = cq[front];
    if (front == rear) { front = -1; rear = -1; }
    else front = (front + 1) % MAX;
    return item;
}

void display() {
    int i;
    if (front == -1) { printf("Empty!\\n"); return; }
    printf("Circular Queue: ");
    i = front;
    while (1) {
        printf("%d ", cq[i]);
        if (i == rear) break;
        i = (i + 1) % MAX;
    }
    printf("\\n");
}

void main() {
    insert(10); insert(20); insert(30); insert(40);
    display();
    printf("Deleted: %d\\n", deleteItem());
    insert(50); insert(60);
    display();
}`
  },
  {
    id: 7,
    title: "Singly Linked List — Insert at Beginning, Display",
    module: "Module 2",
    topic: "Singly Linked List — Insert, Delete, Display, Search",
    frequency: 8,
    explanation: "SLL: Each node has DATA + NEXT pointer. Insert at beginning: create new node, new->next = head, head = new. Display: traverse from head to NULL. Delete first: save head, move head to head->next, free old.",
    code: `#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL;

/* Insert at beginning */
void insertBegin(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = item;
    newNode->next = head;
    head = newNode;
    printf("Inserted %d at beginning\\n", item);
}

/* Delete first node */
void deleteFirst() {
    struct Node* temp;
    if (head == NULL) { printf("List empty!\\n"); return; }
    temp = head;
    head = head->next;
    printf("Deleted: %d\\n", temp->data);
    free(temp);
}

/* Display */
void display() {
    struct Node* ptr = head;
    printf("List: ");
    while (ptr != NULL) {
        printf("%d -> ", ptr->data);
        ptr = ptr->next;
    }
    printf("NULL\\n");
}

/* Count nodes */
int count() {
    struct Node* ptr = head;
    int c = 0;
    while (ptr != NULL) { c++; ptr = ptr->next; }
    return c;
}

void main() {
    insertBegin(30);
    insertBegin(20);
    insertBegin(10);
    display();
    printf("Count: %d\\n", count());
    deleteFirst();
    display();
}`
  },
  {
    id: 8,
    title: "Singly Linked List — Insert After Given Node, Delete Last",
    module: "Module 2",
    topic: "Singly Linked List — Insert, Delete, Display, Search",
    frequency: 6,
    explanation: "Insert after node X: traverse to find X, create new node, new->next = X->next, X->next = new. Delete last: traverse to second-last, set its next = NULL, free last.",
    code: `#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data;
    struct Node* next;
};
struct Node* head = NULL;

void insertEnd(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    struct Node* ptr;
    newNode->data = item;
    newNode->next = NULL;
    if (head == NULL) { head = newNode; return; }
    ptr = head;
    while (ptr->next != NULL) ptr = ptr->next;
    ptr->next = newNode;
}

void insertAfter(int key, int item) {
    struct Node* ptr = head;
    struct Node* newNode;
    while (ptr != NULL && ptr->data != key)
        ptr = ptr->next;
    if (ptr == NULL) { printf("Key not found!\\n"); return; }
    newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = item;
    newNode->next = ptr->next;
    ptr->next = newNode;
    printf("Inserted %d after %d\\n", item, key);
}

void deleteLast() {
    struct Node *ptr, *prev;
    if (head == NULL) { printf("Empty!\\n"); return; }
    if (head->next == NULL) { free(head); head = NULL; return; }
    ptr = head;
    while (ptr->next != NULL) { prev = ptr; ptr = ptr->next; }
    printf("Deleted last: %d\\n", ptr->data);
    prev->next = NULL;
    free(ptr);
}

void display() {
    struct Node* ptr = head;
    while (ptr != NULL) { printf("%d -> ", ptr->data); ptr = ptr->next; }
    printf("NULL\\n");
}

void main() {
    insertEnd(10); insertEnd(20); insertEnd(40); insertEnd(50);
    display();
    insertAfter(20, 30);
    display();
    deleteLast();
    display();
}`
  },
  {
    id: 9,
    title: "Circular Linked List — Insert at Beginning and End",
    module: "Module 3",
    topic: "Circular Linked List — Insert at Beginning/End, Delete",
    frequency: 8,
    explanation: "Circular LL: last node's next points back to head (not NULL). Insert at beginning: new->next = head, traverse to find last, last->next = new, head = new. Insert at end: new->next = head, last->next = new.",
    code: `#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data;
    struct Node* next;
};
struct Node* head = NULL;

void insertBegin(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    struct Node* last;
    newNode->data = item;
    if (head == NULL) {
        newNode->next = newNode;
        head = newNode;
        return;
    }
    last = head;
    while (last->next != head) last = last->next;
    newNode->next = head;
    last->next = newNode;
    head = newNode;
    printf("Inserted %d at beginning\\n", item);
}

void insertEnd(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    struct Node* last;
    newNode->data = item;
    if (head == NULL) {
        newNode->next = newNode;
        head = newNode;
        return;
    }
    last = head;
    while (last->next != head) last = last->next;
    newNode->next = head;
    last->next = newNode;
    printf("Inserted %d at end\\n", item);
}

void display() {
    struct Node* ptr = head;
    if (head == NULL) { printf("Empty!\\n"); return; }
    printf("Circular List: ");
    do {
        printf("%d -> ", ptr->data);
        ptr = ptr->next;
    } while (ptr != head);
    printf("(back to head)\\n");
}

void main() {
    insertEnd(10); insertEnd(20); insertEnd(30);
    display();
    insertBegin(5);
    display();
}`
  },
  {
    id: 10,
    title: "Doubly Linked List — Insert at Beginning, End, After Node",
    module: "Module 3",
    topic: "Doubly Linked List — Insert, Delete, Count",
    frequency: 6,
    explanation: "DLL: Each node has prev, data, next. Insert at beginning: new->next = head, head->prev = new, head = new. Insert at end: traverse, last->next = new, new->prev = last. Delete first: head = head->next, head->prev = NULL.",
    code: `#include<stdio.h>
#include<stdlib.h>

struct Node {
    struct Node* prev;
    int data;
    struct Node* next;
};
struct Node* head = NULL;

void insertBegin(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = item;
    newNode->prev = NULL;
    newNode->next = head;
    if (head != NULL) head->prev = newNode;
    head = newNode;
}

void insertEnd(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    struct Node* ptr = head;
    newNode->data = item;
    newNode->next = NULL;
    if (head == NULL) { newNode->prev = NULL; head = newNode; return; }
    while (ptr->next != NULL) ptr = ptr->next;
    ptr->next = newNode;
    newNode->prev = ptr;
}

void deleteFirst() {
    struct Node* temp;
    if (head == NULL) { printf("Empty!\\n"); return; }
    temp = head;
    head = head->next;
    if (head != NULL) head->prev = NULL;
    printf("Deleted: %d\\n", temp->data);
    free(temp);
}

void display() {
    struct Node* ptr = head;
    printf("DLL: NULL <-> ");
    while (ptr != NULL) {
        printf("%d <-> ", ptr->data);
        ptr = ptr->next;
    }
    printf("NULL\\n");
}

void main() {
    insertEnd(10); insertEnd(20); insertEnd(30);
    insertBegin(5);
    display();
    deleteFirst();
    display();
}`
  },
  {
    id: 11,
    title: "Queue using Linked List — Enqueue, Dequeue",
    module: "Module 3",
    topic: "Queue Implementation Using Linked List",
    frequency: 5,
    explanation: "Linked Queue: no size limit. front pointer for dequeue (deletion), rear pointer for enqueue (insertion). Enqueue: new node at rear. Dequeue: remove from front. Empty when front == NULL.",
    code: `#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* front = NULL;
struct Node* rear = NULL;

void enqueue(int item) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = item;
    newNode->next = NULL;
    if (rear == NULL) { front = rear = newNode; }
    else { rear->next = newNode; rear = newNode; }
    printf("Enqueued: %d\\n", item);
}

int dequeue() {
    struct Node* temp;
    int item;
    if (front == NULL) { printf("Queue Empty!\\n"); return -1; }
    temp = front;
    item = front->data;
    front = front->next;
    if (front == NULL) rear = NULL;
    free(temp);
    return item;
}

void display() {
    struct Node* ptr = front;
    printf("Queue (front->rear): ");
    while (ptr != NULL) { printf("%d ", ptr->data); ptr = ptr->next; }
    printf("\\n");
}

void main() {
    enqueue(10); enqueue(20); enqueue(30);
    display();
    printf("Dequeued: %d\\n", dequeue());
    display();
}`
  },
  {
    id: 12,
    title: "AVL Tree — Construct with 63,9,19,27,18,108,99,81",
    module: "Module 4",
    topic: "AVL Tree — Construct and Rotations",
    frequency: 9,
    explanation: "AVL Tree: Self-balancing BST where Balance Factor (BF) = height(left) - height(right). BF must be -1, 0, or +1. Four rotations: LL (Right rotate), RR (Left rotate), LR (Left then Right), RL (Right then Left). This is THE most repeated question — appears verbatim in 8+ papers.",
    code: `#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data, height;
    struct Node *left, *right;
};

int height(struct Node* n) {
    if (n == NULL) return 0;
    return n->height;
}

int max(int a, int b) { return (a > b) ? a : b; }

int getBalance(struct Node* n) {
    if (n == NULL) return 0;
    return height(n->left) - height(n->right);
}

struct Node* newNode(int key) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = key;
    node->left = node->right = NULL;
    node->height = 1;
    return node;
}

struct Node* rightRotate(struct Node* y) {
    struct Node* x = y->left;
    struct Node* T2 = x->right;
    x->right = y;
    y->left = T2;
    y->height = max(height(y->left), height(y->right)) + 1;
    x->height = max(height(x->left), height(x->right)) + 1;
    printf("Right Rotate at %d\\n", y->data);
    return x;
}

struct Node* leftRotate(struct Node* x) {
    struct Node* y = x->right;
    struct Node* T2 = y->left;
    y->left = x;
    x->right = T2;
    x->height = max(height(x->left), height(x->right)) + 1;
    y->height = max(height(y->left), height(y->right)) + 1;
    printf("Left Rotate at %d\\n", x->data);
    return y;
}

struct Node* insert(struct Node* node, int key) {
    int balance;
    if (node == NULL) return newNode(key);
    if (key < node->data)
        node->left = insert(node->left, key);
    else if (key > node->data)
        node->right = insert(node->right, key);
    else return node;

    node->height = 1 + max(height(node->left), height(node->right));
    balance = getBalance(node);

    /* LL Case */
    if (balance > 1 && key < node->left->data) {
        printf("LL Rotation\\n");
        return rightRotate(node);
    }
    /* RR Case */
    if (balance < -1 && key > node->right->data) {
        printf("RR Rotation\\n");
        return leftRotate(node);
    }
    /* LR Case */
    if (balance > 1 && key > node->left->data) {
        printf("LR Rotation\\n");
        node->left = leftRotate(node->left);
        return rightRotate(node);
    }
    /* RL Case */
    if (balance < -1 && key < node->right->data) {
        printf("RL Rotation\\n");
        node->right = rightRotate(node->right);
        return leftRotate(node);
    }
    return node;
}

void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

void main() {
    struct Node* root = NULL;
    int keys[] = {63, 9, 19, 27, 18, 108, 99, 81};
    int i, n = 8;
    printf("Inserting: ");
    for (i = 0; i < n; i++) {
        printf("%d ", keys[i]);
        root = insert(root, keys[i]);
    }
    printf("\\nInorder traversal: ");
    inorder(root);
    printf("\\n");
}`
  },
  {
    id: 13,
    title: "Binary Search Tree — Insert, Search, Traversals",
    module: "Module 4",
    topic: "Binary Search Tree — Construct, Insert, Search",
    frequency: 6,
    explanation: "BST property: left subtree < root < right subtree. Insert: compare with root, go left if smaller, right if larger. Search: same comparison. Inorder traversal of BST gives sorted sequence.",
    code: `#include<stdio.h>
#include<stdlib.h>

struct Node {
    int data;
    struct Node *left, *right;
};

struct Node* newNode(int key) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = key;
    node->left = node->right = NULL;
    return node;
}

struct Node* insert(struct Node* root, int key) {
    if (root == NULL) return newNode(key);
    if (key < root->data)
        root->left = insert(root->left, key);
    else if (key > root->data)
        root->right = insert(root->right, key);
    return root;
}

struct Node* search(struct Node* root, int key) {
    if (root == NULL || root->data == key) return root;
    if (key < root->data) return search(root->left, key);
    return search(root->right, key);
}

int countNodes(struct Node* root) {
    if (root == NULL) return 0;
    return 1 + countNodes(root->left) + countNodes(root->right);
}

void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

void preorder(struct Node* root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

void postorder(struct Node* root) {
    if (root != NULL) {
        postorder(root->left);
        postorder(root->right);
        printf("%d ", root->data);
    }
}

void main() {
    struct Node* root = NULL;
    struct Node* found;
    int keys[] = {45, 39, 56, 12, 34, 78, 32, 10, 89, 54, 67, 81};
    int i;
    for (i = 0; i < 12; i++)
        root = insert(root, keys[i]);

    printf("Inorder:   "); inorder(root);   printf("\\n");
    printf("Preorder:  "); preorder(root);  printf("\\n");
    printf("Postorder: "); postorder(root); printf("\\n");
    printf("Count: %d\\n", countNodes(root));

    found = search(root, 67);
    if (found) printf("Found: %d\\n", found->data);
    else printf("Not found\\n");
}`
  },
  {
    id: 14,
    title: "Tower of Hanoi — Recursive",
    module: "Module 2",
    topic: "Recursion — Types, Tower of Hanoi, Fibonacci",
    frequency: 5,
    explanation: "Tower of Hanoi: Move N disks from Source to Destination using Auxiliary peg. Rule: never place larger disk on smaller. Recursive: move N-1 from S→A, move 1 from S→D, move N-1 from A→D. Total moves = 2^N - 1.",
    code: `#include<stdio.h>

void hanoi(int n, char from, char to, char aux) {
    if (n == 0) return;
    hanoi(n - 1, from, aux, to);
    printf("Move disk %d from %c to %c\\n", n, from, to);
    hanoi(n - 1, aux, to, from);
}

void main() {
    int n;
    printf("Enter number of disks: ");
    scanf("%d", &n);
    printf("Steps to move %d disks from A to C:\\n", n);
    hanoi(n, 'A', 'C', 'B');
    printf("Total moves = %d\\n", (1 << n) - 1);
}`
  },
  {
    id: 15,
    title: "Fibonacci Series using Recursion",
    module: "Module 2",
    topic: "Recursion — Types, Tower of Hanoi, Fibonacci",
    frequency: 4,
    explanation: "Fibonacci: F(0)=0, F(1)=1, F(n) = F(n-1) + F(n-2). Base case: n==0 return 0, n==1 return 1. Recursive case: return fib(n-1) + fib(n-2). Trace: fib(5) = fib(4)+fib(3) = ... = 5.",
    code: `#include<stdio.h>

int fib(int n) {
    if (n == 0) return 0;  /* Base case 1 */
    if (n == 1) return 1;  /* Base case 2 */
    return fib(n - 1) + fib(n - 2); /* Recursive case */
}

void main() {
    int i, n;
    printf("Enter n: ");
    scanf("%d", &n);
    printf("Fibonacci series: ");
    for (i = 0; i < n; i++)
        printf("%d ", fib(i));
    printf("\\n");
    printf("fib(%d) = %d\\n", n, fib(n));
}`
  },
  {
    id: 16,
    title: "Swap Two Numbers Using Pointers",
    module: "Module 1",
    topic: "Structures and Pointers — C Programs",
    frequency: 4,
    explanation: "Pointers store addresses. *ptr dereferences. Pass &a, &b to function. Inside: use *a and *b to swap values. Call by reference — actual values change in caller.",
    code: `#include<stdio.h>

void swap(int *a, int *b) {
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}

void main() {
    int x = 10, y = 20;
    printf("Before swap: x=%d, y=%d\\n", x, y);
    swap(&x, &y);
    printf("After swap:  x=%d, y=%d\\n", x, y);
}`
  },
  {
    id: 17,
    title: "Employee Structure Program",
    module: "Module 1",
    topic: "Structures and Pointers — C Programs",
    frequency: 5,
    explanation: "Structure groups different data types. Define struct, declare array of structs, use dot (.) operator to access members. For pointers to struct, use arrow (->) operator.",
    code: `#include<stdio.h>
#include<string.h>

struct Employee {
    int empid;
    char name[30];
    int age;
    float salary;
    int yoe;
    char dept[20];
};

void printEmployee(struct Employee *e) {
    printf("ID: %d, Name: %s, YoE: %d\\n", e->empid, e->name, e->yoe);
}

void main() {
    struct Employee emp[10];
    int i;
    /* Read details of 10 employees */
    for (i = 0; i < 10; i++) {
        printf("Enter empid, name, yoe, dept: ");
        scanf("%d %s %d %s", &emp[i].empid, emp[i].name,
              &emp[i].yoe, emp[i].dept);
    }
    /* Print YoE < 5 and dept == developer */
    printf("Eligible employees (YoE<5, dept=developer):\\n");
    for (i = 0; i < 10; i++) {
        if (emp[i].yoe < 5 && strcmp(emp[i].dept, "developer") == 0)
            printEmployee(&emp[i]);
    }
}`
  },
];
