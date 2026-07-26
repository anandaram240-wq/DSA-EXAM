// DSA Study Plan — 7 days — Corrected per Official Syllabus (24CS304)
// Exam: August 2, 2026
// MODULE 1: Structures, Pointers, Stack, Infix/Postfix/Prefix
// MODULE 2: Recursion, Queues, Circular Queue, Singly Linked List
// MODULE 3: Circular LL, Doubly LL, Linked Stack/Queue, Polynomial
// MODULE 4: Trees, BST, AVL Trees (AVL is ONLY Module 4)

export const studyPlan = [
  {
    day: 1,
    label: "Day 1 — Module 1: Stack & Infix/Postfix",
    color: "#ef4444",
    module: "Module 1",
    tasks: [
      "Infix→Postfix algorithm + draw trace table (Symbol | Stack | Output)",
      "Postfix evaluation algorithm + trace for given expression",
      "Stack ADT: Push, Pop, Peek, Display — write C code from memory",
      "Practice expression: (A+B)*C-D$E*F → full trace table",
      "Palindrome check using stack (bonus)",
    ]
  },
  {
    day: 2,
    label: "Day 2 — Module 1: Structures, Pointers & Prefix",
    color: "#ef4444",
    module: "Module 1",
    tasks: [
      "Prefix notation — definition, conversion algorithm (right-to-left scan)",
      "Employee structure + pointer to struct (read 10 employees, print filtered)",
      "Pointer: swap two numbers using pointers (call by reference)",
      "Dynamic memory allocation: malloc(), calloc(), realloc() — syntax & use",
      "Structure vs Union differences (common 6M question)",
    ]
  },
  {
    day: 3,
    label: "Day 3 — Module 2: Recursion & Queues",
    color: "#f97316",
    module: "Module 2",
    tasks: [
      "Recursion types: Direct, Indirect, Tail, Non-Tail, Linear, Tree — with examples",
      "Tower of Hanoi: write recursive C function + trace for n=3 disks (7 moves)",
      "Fibonacci using recursion: write function + trace fib(5)",
      "Queue: enqueue, dequeue using array — write C functions",
      "Circular Queue: insert, delete, display — write C functions with modulo logic",
    ]
  },
  {
    day: 4,
    label: "Day 4 — Module 2: Singly Linked List (Complete)",
    color: "#f97316",
    module: "Module 2",
    tasks: [
      "SLL: Insert at beginning — write C function + diagram",
      "SLL: Insert at end, Insert after given node",
      "SLL: Delete first node, Delete last node, Delete given value",
      "SLL: Search for value, Count nodes, Find max/min",
      "SLL: Display all elements — traversal using while loop",
    ]
  },
  {
    day: 5,
    label: "Day 5 — Module 3: Circular & Doubly Linked List",
    color: "#eab308",
    module: "Module 3",
    tasks: [
      "Circular LL: Insert at beginning (update last->next=newNode, head=newNode)",
      "Circular LL: Insert at end (find last, last->next=newNode, newNode->next=head)",
      "Circular LL: Delete first node and last node — write C functions",
      "Doubly LL: Insert at begin, end, after given node (use prev + next pointers)",
      "Linked Stack + Linked Queue: write C implementations using struct Node",
    ]
  },
  {
    day: 6,
    label: "Day 6 — Module 4: Trees, BST & AVL Trees",
    color: "#22c55e",
    module: "Module 4",
    tasks: [
      "Tree basics: terminology (root, leaf, height, depth, siblings, ancestor)",
      "BST: Build from 45,39,56,12,34,78,32,10,89,54,67,81 — draw step-by-step",
      "BST: Insert and Search algorithms in C",
      "Inorder, Preorder, Postorder traversals — write recursive C functions",
      "AVL Tree: Insert 63,9,19,27,18,108,99,81 — name each rotation (LL/RR/LR/RL)",
    ]
  },
  {
    day: 7,
    label: "Day 7 — Full Revision + Mock",
    color: "#6366f1",
    module: "All",
    tasks: [
      "Quick revision: Infix→Postfix trace tables (any expression)",
      "Quick revision: AVL 63,9,19,27,18,108,99,81 — all 4 rotation types",
      "Quick revision: Circular LL insert begin+end, Doubly LL insert after",
      "Exam strategy: read all 8 questions first, pick easiest 5 (1 per module)",
      "Partial marks: always write definition + struct + algorithm even if stuck",
    ]
  }
];
