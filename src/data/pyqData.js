// DSA PYQ Data — 24CS304 — Corrected per Official Syllabus
// MODULE 1: Structures, Pointers, Stack, Infix/Postfix/Prefix
// MODULE 2: Recursion, Queues, Circular Queue, Singly Linked List
// MODULE 3: Circular List, Doubly LL, Linked Stack/Queue, Polynomial
// MODULE 4: Trees, BST, AVL Trees (AVL is ONLY in Module 4)

export const modules = [
  {
    id: 1,
    name: "Module 1",
    title: "Structures, Pointers, Stack & Infix/Postfix/Prefix",
    priority: "CRITICAL",
    color: "#ef4444",
    syllabusTopics: [
      "Structures and Pointers revisited",
      "Introduction to Data Structures — Classification, Terminology",
      "Stack — Definition, Operations, Array Representation",
      "Applications of Stack: Infix, Postfix, Prefix",
      "Evaluating a Postfix Expression",
      "Converting Infix to Postfix (Program in C)",
      "Self-Study: Files and its Operations",
    ],
    topics: [
      {
        topic: "Infix to Postfix Conversion using Stack",
        frequency: 8,
        marks: 10,
        priority: "HIGH",
        years: ["Dec-2019","Feb-2025 Makeup","Feb/Mar-2025 Supp","Mar/Apr-2024","Mar-2022","Apr/May-2023","Sept/Oct-2022","Dec-2018"],
        questions: [
          { q: "Represent the conversion of the expression A – (B/C + (D% E * F)/G) *H into postfix form in tabular form.", marks: 10, year: "Dec-2019" },
          { q: "Convert the given infix-expression to postfix using stack. (A+B)*D+E/(F+A*D)+C. Also, evaluate the same using the value A=1, B=2, C=4, D=1, E=4, F=1.", marks: 10, year: "Feb-2025 Makeup" },
          { q: "Write an algorithm | C function to convert infix expression into postfix form using stack. Also trace the algorithm for the given infix expression (A+B)–C*(D|E))+F", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Convert the given infix-expression (A+(B–C)*D) to postfix using stack implementation and evaluate the same using the values A=4, B=2, C=3, D=1.", marks: 10, year: "Mar/Apr-2024" },
          { q: "Write an algorithm to convert infix to postfix form. Apply it to convert the following and represent the tracing in tabular form (A+B)*C-D$E*F", marks: 10, year: "Mar-2022" },
          { q: "Represent the conversion of the expression (A-B)+C*D/E-F into postfix form in tabular form.", marks: 10, year: "Apr/May-2023" },
          { q: "Convert the expression (a+b)*d+e/c into postfix form using stack.", marks: 10, year: "Sept/Oct-2022" },
          { q: "Write an algorithm | C function to convert infix expression into postfix form using stack, and Tabulate the tracing of postfix evaluation algorithm by considering the expression 8 4/8*7 2-+2$", marks: 10, year: "Dec-2018" },
        ]
      },
      {
        topic: "Postfix Expression Evaluation using Stack",
        frequency: 7,
        marks: 10,
        priority: "HIGH",
        years: ["Feb/Mar-2025 Supp","Apr/May-2023","Mar/Apr-2024","Jul/Aug-2021","Jan/Feb-2018","Dec-2018"],
        questions: [
          { q: "Evaluate the following postfix expression using stack. 2 3 1 * + 9 –", marks: 5, year: "Feb/Mar-2025 Supp" },
          { q: "Write a C function/algorithm to evaluate the postfix expression. Apply algorithm to evaluate: 9 3 4 * 8 + 4 / -", marks: 10, year: "Apr/May-2023" },
          { q: "Write a c-function to evaluate a postfix expression.", marks: 10, year: "Mar/Apr-2024, Jul/Aug-2021" },
          { q: "Develop an algorithm to evaluate a postfix expression considering expression with only single digit non-negative integer numbers.", marks: 10, year: "Jan/Feb-2018" },
          { q: "Write an algorithm | C function to convert infix expression into postfix form using stack, and Tabulate the tracing of postfix evaluation algorithm by considering the expression 8 4/8*7 2-+2$", marks: 10, year: "Dec-2018" },
        ]
      },
      {
        topic: "Stack — Definition, ADT, Push, Pop, Peek, Display",
        frequency: 7,
        marks: 10,
        priority: "HIGH",
        years: ["Feb-2025 Makeup","Dec-2019","Feb/Mar-2025 Supp","Mar-2022","Apr/May-2023","Sept/Oct-2022","Dec-2018","Jan/Feb-2018"],
        questions: [
          { q: "Define Stack. Write C functions to perform Push, Pop and display operations on a stack.", marks: 10, year: "Feb-2025 Makeup" },
          { q: "Design a C program that implements stack operations using an array.", marks: 10, year: "Dec-2019" },
          { q: "Write functions/algorithms to implement push(), pop() and peek() operations of stack.", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Write C functions to implement following stack operations using array: i) Push ii) Pop iii) Peek", marks: 10, year: "Mar-2022, Apr/May-2023" },
          { q: "Define a stack. Write C functions for push and POP operations.", marks: 10, year: "Sept/Oct-2022" },
          { q: "Write the ADT for stack.", marks: 5, year: "Dec-2018" },
          { q: "Representing Stack operations in C, illustrate the working of a stack with examples.", marks: 10, year: "Jan/Feb-2018" },
        ]
      },
      {
        topic: "Structures and Pointers — C Programs",
        frequency: 5,
        marks: 10,
        priority: "MEDIUM",
        years: ["Dec-2019","Feb-2025 Makeup","Mar-2022","Sept/Oct-2022","Jul/Aug-2021","Jan/Feb-2018","Apr/May-2023"],
        questions: [
          { q: "Write a program in C that initializes the members of an employee structure using pointer. Also write a user defined function that prints employee information.", marks: 10, year: "Dec-2019" },
          { q: "A company ABC: Design a 'C' Program to read the details of 10 employees (empid, name, age, YoE, department, salary) and print empid, name and YoE of employees whose YoE is below 5 years and department is developer.", marks: 10, year: "Feb-2025 Makeup" },
          { q: "Write a 'c' program to create a structure with [emp-id, name, age, salary]. Then read and print the data for 10 employees.", marks: 10, year: "Mar-2022" },
          { q: "Write a C program to store the details of ten books (book title, author name and cost).", marks: 10, year: "Sept/Oct-2022" },
          { q: "What is a pointer? Write a C function to swap two numbers using pointers.", marks: 10, year: "Jul/Aug-2021, Mar-2022, Apr/May-2023" },
          { q: "What is a Pointer? Illustrate pointer initialization and declaration with examples.", marks: 5, year: "Jan/Feb-2018" },
          { q: "Develop a C function to store N elements into an array A dynamically and reverse into array B using pointers.", marks: 10, year: "Jan/Feb-2018" },
          { q: "Differentiate between Structure and a Union with examples.", marks: 6, year: "Jan/Feb-2018" },
        ]
      },
      {
        topic: "Data Structures — Classification, ADT, Terminology",
        frequency: 4,
        marks: 8,
        priority: "LOW",
        years: ["Dec-2019","Feb-2025 Makeup","Feb/Mar-2025 Supp","Sept/Oct-2022","Jan/Feb-2018"],
        questions: [
          { q: "Briefly outline the classification of non primitive data structures with suitable examples.", marks: 6, year: "Dec-2019" },
          { q: "Define data Structure. With a neat diagram, explain the classification of data structure and list the advantages.", marks: 10, year: "Feb-2025 Makeup" },
          { q: "Define data structure. Briefly explain its classification with examples.", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Write the classification of data structures and quote an example for each category.", marks: 6, year: "Sept/Oct-2022" },
          { q: "Define ADT. Develop ADT for natural numbers.", marks: 6, year: "Jan/Feb-2018" },
          { q: "Design an algorithm to check if given string is palindrome using stack.", marks: 6, year: "Dec-2019" },
        ]
      },
      {
        topic: "Files and its Operations (Self-Study)",
        frequency: 2,
        marks: 8,
        priority: "LOW",
        years: ["Dec-2019","Mar-2022","Sept/Oct-2022"],
        questions: [
          { q: "Demonstrate the concept of random access to files by writing a C program that prints every fifth character in a given text file with name ABC.txt.", marks: 8, year: "Dec-2019" },
          { q: "Explain the following file functions: i) fopen() (ii) fclose() (iii) fseek() (iv) ftell() (v) rewind()", marks: 8, year: "Mar-2022" },
          { q: "With syntax explain fseek() and ftell() functions.", marks: 6, year: "Sept/Oct-2022" },
        ]
      },
    ]
  },

  // ─────────────────────────────────────────────────────────
  // MODULE 2: Recursion, Queues (incl. Circular Queue), Singly LL
  // NOTE: AVL Tree is NOT in Module 2 — it is ONLY in Module 4
  // ─────────────────────────────────────────────────────────
  {
    id: 2,
    name: "Module 2",
    title: "Recursion, Queues, Circular Queue & Singly Linked List",
    priority: "CRITICAL",
    color: "#f97316",
    syllabusTopics: [
      "Recursion — GCD, Fibonacci Series, Types, Tower of Hanoi, Recursion vs Iteration",
      "Queues — Definition, Array Representation, Operations",
      "Types of Queues — Circular Queue and its implementation in C",
      "Applications of Queues",
      "Linked List — Introduction, LL vs Arrays",
      "Singly Linked List — Insert, Delete, Display, Search, Traverse",
      "Self-Study: Priority Queues",
    ],
    topics: [
      {
        topic: "Recursion — Types, GCD, Fibonacci, Tower of Hanoi",
        frequency: 7,
        marks: 10,
        priority: "HIGH",
        years: ["Feb-2025 Makeup","Feb/Mar-2025 Supp","Mar/Apr-2024","Jan/Feb-2018","Mar-2022","Apr/May-2023","Sept/Oct-2022"],
        questions: [
          { q: "Define Recursion. List and explain the different types of recursion with example.", marks: 10, year: "Feb-2025 Makeup" },
          { q: "Define recursion. Explain the different types of recursion with examples.", marks: 10, year: "Feb/Mar-2025 Supp, Mar/Apr-2024" },
          { q: "Define recursion. Outline an algorithm to solve the problem to Tower of Hanoi.", marks: 10, year: "Jan/Feb-2018" },
          { q: "Define recursion. Analyse the following representation to move the disks from source to destination and write a recursive function for the same.", marks: 10, year: "Mar/Apr-2024" },
          { q: "Write a recursive function to implement Tower of Hanoi.", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Consider the following recursive function: int fun(int n){if(n==0) return(0); return(n+fun(n-1));} void main(){int x; x=fun(5); printf(\"x=%d\",x);} Answer: i) Define recursion ii) Compute the output iii) Find the base case iv) Find the recursive case v) What is the type of recursion employed?", marks: 10, year: "Mar-2022" },
          { q: "Consider the following recursive function: int func(int n){if(n==0) return 0; return(n+func(n-2));} void main(){int x; x=func(6); print(\"x=%d\",x);} i) Compute the output ii) Find the base case iii) Find the recursive case iv) What is the type of recursion employed?", marks: 10, year: "Apr/May-2023" },
          { q: "Identify the Base and Recursive case for the Fibonacci series and write a C program to print the Fibonacci series using recursion. Hence, trace the same for Fibonacci(5).", marks: 10, year: "Feb-2025 Makeup" },
          { q: "Demonstrate the application of stacks in executing recursive program by writing a C program for finding aᵇ.", marks: 10, year: "Sept/Oct-2022" },
          { q: "Write a recursive definition for computing aᵇ. Implement the same using a C program.", marks: 10, year: "Dec-2019" },
          { q: "With a suitable example differentiate between tail recursion and non-tail recursion.", marks: 6, year: "Dec-2019" },
        ]
      },
      {
        topic: "Queue — Linear Queue, Enqueue, Dequeue, Display",
        frequency: 5,
        marks: 10,
        priority: "HIGH",
        years: ["Feb/Mar-2025 Supp","Dec-2019","Dec-2018","Jul/Aug-2021","Mar/Apr-2024"],
        questions: [
          { q: "Write C functions | algorithms to implement display, insert and delete functions of queue.", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Write user defined functions in C to implement insert and display operations on a linear queue.", marks: 10, year: "Dec-2019" },
          { q: "How to implement a queue using one dimensional array? Write C functions for enqueue and dequeue operations.", marks: 10, year: "Dec-2018" },
          { q: "Define queue and linked queue. Explain operations on linked queues along with examples and algorithm.", marks: 10, year: "Jul/Aug-2021" },
          { q: "Design a C function/program for a toll gate that takes the entry, ticket, and continues the journey using appropriate data structure.", marks: 10, year: "Mar/Apr-2024" },
          { q: "Define queue. List and write the operations which can be applied on queue along with its applications.", marks: 6, year: "Mar/Apr-2024" },
          { q: "Identify atleast five applications of queue.", marks: 5, year: "Sept/Oct-2022" },
        ]
      },
      {
        topic: "Circular Queue — Insert, Delete, Display",
        frequency: 6,
        marks: 10,
        priority: "HIGH",
        years: ["Feb-2025 Makeup","Feb/Mar-2025 Supp","Mar-2022","Apr/May-2023","Sept/Oct-2022"],
        questions: [
          { q: "List the different types of Queues and write the code fragment for insert, delete and display the contents of Circular Queue.", marks: 10, year: "Feb-2025 Makeup" },
          { q: "Write C functions | algorithms to implement insertion, deletion and display functions of circular queue.", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Develop C functions to implement insertion and deletion in a circular queue.", marks: 10, year: "Mar-2022" },
          { q: "What are dequeues? Explain its variants.", marks: 6, year: "Apr/May-2023" },
          { q: "Distinguish between linear queue and circular queue. Which one is better and why?", marks: 6, year: "Sept/Oct-2022" },
          { q: "Draw the queue structure in each case: i) Add A,B,C,D,E,F ii) Delete two letters iii) Add G iv) Delete four letters v) Add H", marks: 6, year: "Apr/May-2023" },
          { q: "Write two differences: i) Linear queue and circular queue ii) Static memory allocation and dynamic memory allocation iii) Singly linked list and circular linked list", marks: 6, year: "Mar-2022" },
        ]
      },
      {
        topic: "Singly Linked List — Insert, Delete, Display, Search, Traverse",
        frequency: 8,
        marks: 10,
        priority: "HIGH",
        years: ["Feb-2025 Makeup","Feb/Mar-2025 Supp","Mar/Apr-2024","Jul/Aug-2021","Dec-2019","Sept/Oct-2022","Mar-2022","Dec-2018","Jan/Feb-2018"],
        questions: [
          { q: "Design a C function to insert a node in the beginning of a singly linked list and display the same.", marks: 10, year: "Feb-2025 Makeup" },
          { q: "Design a C function to delete the first node in a given singly linked list.", marks: 5, year: "Feb-2025 Makeup" },
          { q: "Write C functions | algorithms to implement: i) Insertion at the beginning of the linked list. ii) Deletion at the end of the linked list.", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Assume a four node single linked list with data values 15, 25, 40, 50: i) Insert a node with data value 30 in between nodes 25 and 40 ii) Delete node with data value 40", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Implement a C function to i) Insert a node in the beginning of singly linked list ii) Display the elements in singly linked list", marks: 10, year: "Mar/Apr-2024" },
          { q: "Write the following algorithm for single linked list: i) Inserting ITEM as the first node. ii) Deleting the node with the given ITEM.", marks: 10, year: "Jul/Aug-2021" },
          { q: "With appropriate algorithms implement the following on a singly linked list: Print smallest value, Count nodes, Delete last node", marks: 10, year: "Dec-2019" },
          { q: "Given a singly linked list with start pointer: i) Displaying contents of last node ii) Searching for value x", marks: 10, year: "Sept/Oct-2022" },
          { q: "Write an algorithm for inserting a new node after the given node in a singly linked list.", marks: 6, year: "Sept/Oct-2022" },
          { q: "Given a singly linked list of integers, design an algorithm/C function to find the maximum value.", marks: 6, year: "Mar-2022" },
          { q: "Build C functions: i) Finding the sum of only ODD valued elements ii) Interchanging the first and second element in a SLL", marks: 10, year: "Jan/Feb-2018" },
          { q: "Design algorithms: i) Deleting the node with a given value ii) Traversing the list", marks: 10, year: "Dec-2018" },
          { q: "Write a C function to create a linked list and display the linked list. Also count the number of occurrences of a given value.", marks: 10, year: "Apr/May-2023" },
        ]
      },
      {
        topic: "Dynamic Memory Allocation — malloc, calloc, realloc",
        frequency: 3,
        marks: 6,
        priority: "MEDIUM",
        years: ["Dec-2019","Sept/Oct-2022","Mar-2022","Apr/May-2023"],
        questions: [
          { q: "Write a C program to create an array of size N dynamically. Program should also print the biggest element in the array.", marks: 6, year: "Dec-2019" },
          { q: "Create a dynamic array to hold n integers by using appropriate library functions.", marks: 6, year: "Sept/Oct-2022" },
          { q: "With syntax, explain the following dynamic memory allocation functions: i) malloc() ii) Calloc() iii) realloc()", marks: 8, year: "Mar-2022" },
          { q: "List and explain various functions supported by C to carry out dynamic memory allocation.", marks: 8, year: "Apr/May-2023" },
          { q: "Explain memory allocation and de-allocation for a linked list with example.", marks: 6, year: "Jul/Aug-2021" },
        ]
      },
    ]
  },

  // ─────────────────────────────────────────────────────────
  // MODULE 3: Circular LL, Doubly LL, Linked Stack/Queue, Polynomial
  // ─────────────────────────────────────────────────────────
  {
    id: 3,
    name: "Module 3",
    title: "Circular List, Doubly Linked List, Linked Stack/Queue & Polynomial",
    priority: "HIGH",
    color: "#eab308",
    syllabusTopics: [
      "Circular Lists — C Implementation: adding and deleting nodes",
      "Doubly Linked List — C implementation: adding and deleting nodes",
      "Circular Doubly Linked List",
      "Linked List Applications: Linked Implementation of Stacks",
      "Linked List Applications: Linked Implementation of Queues",
      "Polynomial Representation using Linked List",
      "Self-Study: Implementation of Polynomial Addition using Linked Lists",
    ],
    topics: [
      {
        topic: "Circular Linked List — Insert at Beginning/End, Delete First/Last",
        frequency: 8,
        marks: 10,
        priority: "HIGH",
        years: ["Feb-2025 Makeup","Feb/Mar-2025 Supp","Apr/May-2023","Dec-2019","Sept/Oct-2022","Mar/Apr-2024","Mar-2022","Dec-2018","Jul/Aug-2021"],
        questions: [
          { q: "Write a C function to insert a new node at the beginning and end of a circular linked list.", marks: 10, year: "Feb-2025 Makeup" },
          { q: "Write C functions | algorithms to implement: i) Insert a new node at the beginning of circular linked list ii) Insert a new node at the end of circular linked list", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Write C functions to insert a new node at the beginning and end of a circular linked list.", marks: 10, year: "Apr/May-2023" },
          { q: "With a neat diagram demonstrate the structural details of a circular list. Design C functions to add a node to the beginning of a circular list and delete the last node.", marks: 10, year: "Dec-2019" },
          { q: "What is a circularly linked list? Write a C program to create a circularly linked list by adding nodes to the end.", marks: 10, year: "Sept/Oct-2022, Mar/Apr-2024" },
          { q: "Ascertain the advantages of circular linked list over ordinary linked list. Design C functions to delete the first node and last node of the given circular linked list.", marks: 10, year: "Mar-2022" },
          { q: "Identify the advantage of circularly linked list? Write a C program to create a circular linked list by adding nodes to the front of the list.", marks: 10, year: "Dec-2018" },
          { q: "Explain the following with respect to circular linked list: i) Inserting a new node ii) Deleting a node", marks: 10, year: "Jul/Aug-2021" },
          { q: "Write a C function to insert-front in circular doubly linked list and Delete-front in circular doubly linked list", marks: 10, year: "Mar/Apr-2024" },
        ]
      },
      {
        topic: "Doubly Linked List — Insert, Delete, Count Even Nodes",
        frequency: 6,
        marks: 10,
        priority: "HIGH",
        years: ["Feb-2025 Makeup","Feb/Mar-2025 Supp","Mar-2022","Apr/May-2023","Sept/Oct-2022","Jul/Aug-2021","Jan/Feb-2018","Dec-2019"],
        questions: [
          { q: "What are the advantages of Doubly linked list over Singly linked list? Write a C function to insert a node in the beginning of a Doubly Linked List.", marks: 10, year: "Feb-2025 Makeup" },
          { q: "Write C functions | algorithms to implement doubly linked list functions: i) Insert a node at the end of DLL ii) Delete the first node iii) Count the number of nodes which have even values.", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Write C functions to: i) insert a node at the beginning ii) insert a node at the end iii) insert a node after a given node in a doubly linked list", marks: 10, year: "Mar-2022" },
          { q: "What are the advantages of Doubly linked list? Also write a C function to insert a node after a given node in the DLL.", marks: 10, year: "Apr/May-2023" },
          { q: "Consider a doubly linked list: Write algorithm for: i) Deleting a node before the given node ii) Inserting a node after the given node", marks: 10, year: "Sept/Oct-2022" },
          { q: "Write a C program to create a doubly linked list and perform insertions and deletions in all cases.", marks: 10, year: "Jul/Aug-2021" },
          { q: "Design an algorithm to delete the last node of a doubly linked list.", marks: 6, year: "Jan/Feb-2018" },
          { q: "Write a C program to create and display a doubly linked list of integers by adding nodes to the front.", marks: 10, year: "Dec-2019" },
        ]
      },
      {
        topic: "Stack Implementation Using Linked List",
        frequency: 5,
        marks: 10,
        priority: "HIGH",
        years: ["Feb-2025 Makeup","Feb/Mar-2025 Supp","Mar/Apr-2024","Sept/Oct-2022"],
        questions: [
          { q: "Write a C function to implement stack operations using linked list.", marks: 10, year: "Feb-2025 Makeup, Feb/Mar-2025 Supp, Mar/Apr-2024" },
          { q: "How to represent a stack using linked list. Write the algorithms for push and pop operations on such a representation.", marks: 10, year: "Sept/Oct-2022" },
        ]
      },
      {
        topic: "Queue Implementation Using Linked List",
        frequency: 4,
        marks: 10,
        priority: "HIGH",
        years: ["Feb-2025 Makeup","Apr/May-2023","Jul/Aug-2021","Dec-2019"],
        questions: [
          { q: "Write a C function to perform queue operations using linked list.", marks: 10, year: "Feb-2025 Makeup" },
          { q: "Implement queue operations using linked list.", marks: 10, year: "Apr/May-2023" },
          { q: "Write user defined functions to implement operations of linear queue using linked list.", marks: 10, year: "Jul/Aug-2021" },
          { q: "Identify the advantages of linked implementation of queues. Write C functions for insertion and deletion operation into linked queue.", marks: 10, year: "Dec-2019" },
        ]
      },
      {
        topic: "Polynomial Representation using Linked List",
        frequency: 2,
        marks: 6,
        priority: "LOW",
        years: ["Dec-2019","Dec-2018","Apr/May-2023","Jan/Feb-2018"],
        questions: [
          { q: "Give the linked list representation of the following polynomial 6x³+9x²+7x+1.", marks: 6, year: "Dec-2019, Apr/May-2023" },
          { q: "Give the linked representation of the following polynomial 6x³+9x²+7x+1. Design a user defined C function that will add two polynomials.", marks: 10, year: "Dec-2018" },
          { q: "Design an algorithm to add two polynomials.", marks: 6, year: "Jan/Feb-2018" },
          { q: "Specify the use of header node in header linked list.", marks: 4, year: "Dec-2018" },
          { q: "Write a program to create a linked list which stores the details of employees (name, empID, designation). Read and print the information.", marks: 10, year: "Apr/May-2023" },
        ]
      },
    ]
  },

  // ─────────────────────────────────────────────────────────
  // MODULE 4: Trees, BST, AVL Trees
  // AVL Tree is ONLY here — NOT in Module 2
  // ─────────────────────────────────────────────────────────
  {
    id: 4,
    name: "Module 4",
    title: "Trees, Binary Search Trees & AVL Trees",
    priority: "HIGH",
    color: "#22c55e",
    syllabusTopics: [
      "Trees — Basic Terminology, Types, Array and Linked Representation",
      "Creating a Binary Tree from a General Tree",
      "Tree Traversals — In-order, Pre-order, Post-order, Level-order",
      "Constructing a Binary Tree from Traversal Results",
      "Binary Search Trees — Definition, Create, Insert, Delete, Display",
      "BST — Finding Height, Finding Number of Nodes",
      "AVL Trees — Definition, Rotations (LL, RR, LR, RL), Constructing AVL Tree",
      "Self-Study: Threaded Binary Trees",
    ],
    topics: [
      {
        topic: "AVL Tree — Construct with Rotations (LL, RR, LR, RL)",
        frequency: 9,
        marks: 10,
        priority: "HIGH",
        years: ["Dec-2019","Jul/Aug-2021","Dec-2018","Mar/Apr-2024","Apr/May-2023","Mar-2022","Feb-2025 Makeup","Feb/Mar-2025 Supp","Sept/Oct-2022"],
        questions: [
          { q: "Construct an AVL tree by inserting the following elements in the given order: 63, 9, 19, 27, 18, 108, 99, 81. Clearly indicate type of rotation in each step.", marks: 10, year: "Dec-2019, Jul/Aug-2021, Dec-2018, Mar/Apr-2024, Apr/May-2023, Mar-2022, Feb-2025 Makeup" },
          { q: "Construct AVL tree for the given values 63, 9, 19, 27, 18, 108, 99, 81", marks: 10, year: "Feb-2025 Makeup" },
          { q: "Create an AVL for 25, 26, 28, 23, 22, 24. Clearly indicate type of rotation in each step.", marks: 10, year: "Dec-2019" },
          { q: "Construct AVL tree for the given values 21, 26, 30, 9, 4, 14, 28, 18, 15", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Explain: i) Rotate right in AVL (RR) ii) Rotate left right in AVL (RL)", marks: 6, year: "Mar/Apr-2024" },
          { q: "Explain with examples all four rotations of AVL tree.", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Clearly outline the four categories of rotations performed in an AVL tree.", marks: 10, year: "Sept/Oct-2022" },
        ]
      },
      {
        topic: "Binary Search Tree — Construct, Insert, Search, Delete",
        frequency: 6,
        marks: 10,
        priority: "HIGH",
        years: ["Mar-2022","Apr/May-2023","Dec-2018","Feb/Mar-2025 Supp","Feb-2025 Makeup","Mar/Apr-2024","Dec-2019"],
        questions: [
          { q: "Construct the binary search tree for the values: 45, 39, 56, 12, 34, 78, 32, 10, 89, 54, 67, 81. Also write the steps to search for 67.", marks: 10, year: "Mar-2022" },
          { q: "What is a binary search tree? Draw the BST for: 45, 39, 56, 12, 34, 78, 32, 10, 89, 54, 67, 81.", marks: 10, year: "Apr/May-2023" },
          { q: "Create a Binary search tree using 45, 39, 56, 12, 34, 78, 32, 10, 89, 54. Write the algorithm for searching a value in BST.", marks: 10, year: "Dec-2018" },
          { q: "Construct Binary search tree for 45, 15, 79, 90, 10, 55, 12, 20, 50.", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Write a suitable algorithm to i) Insert a node into a binary search tree. ii) Count the number of nodes in BST.", marks: 10, year: "Feb-2025 Makeup" },
          { q: "Write suitable algorithm: i) Search for a given value in BST ii) Count the number of internal nodes", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Write C functions: i) Insert a node into a BST ii) Search a node in BST", marks: 10, year: "Mar/Apr-2024" },
          { q: "Develop C functions: i) Inserting a node into BST ii) Count internal nodes iii) Count external nodes", marks: 10, year: "Mar-2022" },
          { q: "Create a binary tree for 10, 12, 5, 4, 20, 8, 7, 15, 13 and give inorder, preorder and postorder traversal.", marks: 10, year: "Dec-2019, Mar/Apr-2024" },
          { q: "How to use a binary search tree for sorting numbers? Write a C program.", marks: 10, year: "Dec-2019" },
        ]
      },
      {
        topic: "Tree Traversals — Inorder, Preorder, Postorder, Level Order",
        frequency: 5,
        marks: 10,
        priority: "HIGH",
        years: ["Feb/Mar-2025 Supp","Mar/Apr-2024","Dec-2019","Dec-2018","Jan/Feb-2018","Apr/May-2023","Sept/Oct-2022"],
        questions: [
          { q: "Write C functions | algorithms to implement inorder, pre-order and post-order tree traversals.", marks: 10, year: "Feb/Mar-2025 Supp" },
          { q: "Convert the following into a binary tree and traverse it in inorder, preorder and postorder.", marks: 10, year: "Sept/Oct-2022" },
          { q: "Compose algorithms for all the three traversals of a binary tree. Apply the same on the following binary tree.", marks: 10, year: "Jan/Feb-2018" },
          { q: "List the various traversal methods on a binary tree and apply them.", marks: 10, year: "Dec-2018" },
          { q: "Write implementation in C to traverse a binary tree in in-order, pre-order and post-order.", marks: 10, year: "Apr/May-2023" },
          { q: "Construct a binary tree given: Pre-order A B D H I E C F J K G L, Inorder H D I B E A J F K C G L", marks: 10, year: "Dec-2019" },
          { q: "Construct a binary tree for a + b / c * d - e.", marks: 6, year: "Dec-2018" },
        ]
      },
      {
        topic: "Tree Terminology — Height, Depth, Siblings, Leaf Nodes",
        frequency: 3,
        marks: 8,
        priority: "MEDIUM",
        years: ["Dec-2019","Apr/May-2023","Mar-2022","Sept/Oct-2022"],
        questions: [
          { q: "Assuming a suitable tree define: Siblings, Height of a tree, Ancestor of a node, Non-leaf nodes, Depth of a node", marks: 6, year: "Dec-2019" },
          { q: "Consider the tree: i) Obtain the sequential memory representation ii) Give the linked representation iii) Height of tree iv) Depth of node 'I' v) Height of subtree at 'E' vi) Indegree of node A", marks: 10, year: "Mar-2022" },
          { q: "Consider the tree: i) Name leaf nodes ii) Name ancestors of E iii) Name siblings of C iv) Find height v) Name descendants of G", marks: 10, year: "Apr/May-2023" },
          { q: "Compare the implicit sequential representation of a binary tree with linked representation.", marks: 6, year: "Sept/Oct-2022, Dec-2018" },
          { q: "Give an example for each: Binary search tree, Complete Binary tree, Tournament tree, Expression tree, Forest.", marks: 6, year: "Sept/Oct-2022" },
          { q: "List the rules for converting general tree to a binary tree.", marks: 6, year: "Dec-2019" },
        ]
      },
      {
        topic: "Expression Trees — Infix, Prefix, Postfix from Tree",
        frequency: 3,
        marks: 8,
        priority: "MEDIUM",
        years: ["Dec-2019","Apr/May-2023","Sept/Oct-2022"],
        questions: [
          { q: "For the given expression tree, do the following: i) Find the height ii) Extract the infix expression iii) Find the corresponding prefix expression iv) Find the corresponding postfix expression v) Evaluate the infix expression given a=30, b=10, c=2, d=30, e=10.", marks: 10, year: "Dec-2019, Apr/May-2023, Sept/Oct-2022" },
        ]
      },
      {
        topic: "Threaded Binary Trees (Self-Study)",
        frequency: 4,
        marks: 8,
        priority: "MEDIUM",
        years: ["Jul/Aug-2021","Sept/Oct-2022","Dec-2018","Apr/May-2023"],
        questions: [
          { q: "What is threaded binary trees? Explain the types of threaded binary tree. What are the advantages of threaded binary tree?", marks: 10, year: "Jul/Aug-2021" },
          { q: "Why is a threaded binary tree considered as efficient tree? With suitable example demonstrate one way and two way threading, clearly indicating the merits.", marks: 10, year: "Sept/Oct-2022" },
          { q: "Why are threaded trees considered as efficient trees? Outline the merits of threaded trees.", marks: 6, year: "Dec-2018" },
          { q: "Briefly explain threaded binary tree with example.", marks: 6, year: "Apr/May-2023" },
          { q: "Write the algorithm for inorder traversal of a threaded binary tree.", marks: 6, year: "Dec-2018" },
          { q: "Give the linked representation of the following binary tree with two way threading.", marks: 6, year: "Dec-2019" },
          { q: "List the advantages of a threaded Binary tree.", marks: 4, year: "Dec-2019" },
        ]
      },
    ]
  }
];

export const allQuestions = modules.flatMap(m =>
  m.topics.flatMap(t =>
    t.questions.map(q => ({
      ...q,
      module: m.name,
      moduleTitle: m.title,
      topic: t.topic,
      years: t.years,
      priority: m.priority,
      color: m.color,
    }))
  )
);
