import { useState } from 'react'
import { allQuestions } from '../data/pyqData'
import { ChevronDown } from 'lucide-react'

export default function Quiz() {
  const [moduleFilter, setModuleFilter] = useState('all')
  const [currentIdx, setCurrentIdx] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState({ correct: 0, attempted: 0 })

  const questions = moduleFilter === 'all'
    ? allQuestions
    : allQuestions.filter(q => q.module === moduleFilter)

  const current = questions[currentIdx % questions.length]
  const progress = questions.length > 0 ? Math.round((currentIdx / questions.length) * 100) : 0

  const next = (wasCorrect) => {
    if (wasCorrect !== undefined) {
      setScore(s => ({ correct: s.correct + (wasCorrect ? 1 : 0), attempted: s.attempted + 1 }))
    }
    setShowAnswer(false)
    setCurrentIdx(i => (i + 1) % questions.length)
  }

  const reset = () => {
    setCurrentIdx(0)
    setShowAnswer(false)
    setScore({ correct: 0, attempted: 0 })
  }

  // Compact hint answers for each question type
  const getHint = (q) => {
    const text = q.q.toLowerCase()
    if (text.includes('avl') && (text.includes('63') || text.includes('insert')))
      return 'Insert one by one. Check BF = height(left) - height(right) after each insert. BF must be -1,0,+1. Four rotations: LL→right rotate, RR→left rotate, LR→left then right, RL→right then left. Key rotations: 9,19→LL(RR rotation at 63), 19,27→LR(LR rotation at 9), 18→RL(RL rotation at 27), 99→LL(RR rotation at 108), 81→RL rotation.'
    if (text.includes('postfix') && text.includes('stack') && text.includes('infix'))
      return 'Algorithm: Scan left→right. Operand→output. (→push. )→pop until (. Operator→pop ≥ precedence then push. End→pop all. Precedence: $ > */% > +-. Trace in table: Symbol | Stack | Output'
    if (text.includes('postfix') && (text.includes('eval') || text.includes('2 3') || text.includes('9 3')))
      return 'Scan left→right. Digit→push. Operator→pop b then pop a, compute a OP b, push result. Final stack top = answer. Example: 2 3 1 * + 9 - → push 2,3,1 → *: pop 1,3 → 3, push 3 → push 5 → push 9 → -: 5-9 = -4'
    if (text.includes('push') || text.includes('pop') || text.includes('stack'))
      return 'Stack ADT: top=-1 (empty). Push: if(top==MAX-1) overflow; else stack[++top]=item. Pop: if(top==-1) underflow; else return stack[top--]. Peek: return stack[top]. Display: loop from top to 0.'
    if (text.includes('circular') && text.includes('linked'))
      return 'Circular LL: last->next points to head. Insert at begin: new->next=head, find last, last->next=new, head=new. Insert at end: new->next=head, find last, last->next=new. Display: do-while loop until ptr==head again.'
    if (text.includes('doubly') || text.includes('dll'))
      return 'DLL: Node has prev, data, next. Insert begin: new->next=head, head->prev=new, head=new. Insert end: traverse to last, last->next=new, new->prev=last. Delete first: head=head->next, head->prev=NULL.'
    if (text.includes('bst') || text.includes('binary search tree'))
      return 'BST: left<root<right. Insert: if key<root go left, else go right, insert at NULL. Inorder traversal of BST = sorted order. Build 45,39,56,12,34,78,32,10,89,54,67,81 starting from 45 as root.'
    if (text.includes('recursion') || text.includes('recursive'))
      return 'Recursion types: Direct (f calls f), Indirect (f calls g calls f), Tail (recursive call is last), Non-tail (operations after recursive call), Linear (one recursive call), Tree (multiple recursive calls). Base case stops recursion.'
    if (text.includes('hanoi'))
      return 'Tower of Hanoi(n, from, to, aux): if n==0 return; hanoi(n-1, from, aux, to); print move n from→to; hanoi(n-1, aux, to, from). Total moves = 2^n - 1. For n=3: 7 moves.'
    if (text.includes('fibonacci'))
      return 'fib(0)=0, fib(1)=1, fib(n)=fib(n-1)+fib(n-2). Trace fib(5): fib(5)=fib(4)+fib(3)=fib(3)+fib(2)+fib(2)+fib(1)=...=5. Series: 0,1,1,2,3,5,8,13,21...'
    if (text.includes('queue'))
      return 'Linear Queue: front=-1,rear=-1. Enqueue: if rear==MAX-1 full; queue[++rear]=item; if front==-1 front=0. Dequeue: item=queue[front++]. Circular Queue: full when (rear+1)%MAX==front. Use modulo for wrap-around.'
    if (text.includes('singly') || text.includes('linked list'))
      return 'SLL: head pointer. Insert begin: new->next=head, head=new. Insert end: traverse to last, last->next=new. Delete first: temp=head, head=head->next, free(temp). Delete last: traverse to 2nd-last, 2nd-last->next=NULL.'
    if (text.includes('traversal') || text.includes('inorder'))
      return 'Inorder: L-Root-R (sorted for BST). Preorder: Root-L-R (tree copy). Postorder: L-R-Root (delete tree). All three use recursion: base case if root==NULL return.'
    if (text.includes('rotation') || text.includes('avl'))
      return 'LL: Insert in left of left child → Right Rotate at unbalanced node. RR: Insert in right of right child → Left Rotate. LR: Insert in right of left child → Left rotate left child, then Right rotate. RL: Insert in left of right child → Right rotate right child, then Left rotate.'
    return 'Review this topic in the Theory section. Key points: Definition → Algorithm/Code → Example → Trace.'
  }

  if (questions.length === 0) return (
    <div className="page-header">
      <h1 className="page-title">Quiz Mode</h1>
      <p>No questions found for selected filter.</p>
    </div>
  )

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Quiz Mode</h1>
        <p className="page-subtitle">Practice all DSA PYQs in flash-card style</p>
      </div>

      {/* Score */}
      <div className="stats-row mb-20">
        <div className="stat-card">
          <div className="stat-value" style={{color:'var(--accent)'}}>{questions.length}</div>
          <div className="stat-label">Total Questions</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color:'var(--blue)'}}>{currentIdx + 1}</div>
          <div className="stat-label">Current</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color:'var(--green)'}}>{score.correct}</div>
          <div className="stat-label">Correct</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{color:'var(--text-muted)'}}>{score.attempted}</div>
          <div className="stat-label">Attempted</div>
        </div>
      </div>

      {/* Filter */}
      <div className="tabs mb-20">
        {['all','Module 1','Module 2','Module 3','Module 4'].map(f => (
          <button key={f} className={`tab ${moduleFilter===f?'active':''}`}
            onClick={() => { setModuleFilter(f); reset(); }}>
            {f === 'all' ? 'All Modules' : f}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="progress-bar-wrap mb-20">
        <div className="progress-bar-fill" style={{width:`${progress}%`,background:'var(--accent)'}} />
      </div>

      {/* Quiz Card */}
      <div className="quiz-card">
        <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:16,flexWrap:'wrap'}}>
          <span className="badge badge-muted">{current.module}</span>
          <span style={{fontSize:11,color:'var(--text-muted)'}}>{current.topic}</span>
          <span style={{marginLeft:'auto',fontSize:11,color:'var(--text-muted)'}}>
            Q {(currentIdx % questions.length) + 1}/{questions.length}
          </span>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
          borderRadius: 10, padding: '16px 18px', marginBottom: 20
        }}>
          <p className="quiz-question" style={{margin:0}}>{current.q}</p>
          <div style={{marginTop:10,display:'flex',gap:8,flexWrap:'wrap'}}>
            <span style={{background:'var(--accent-light)',color:'var(--accent)',border:'1px solid rgba(99,102,241,0.3)',borderRadius:5,padding:'2px 8px',fontSize:11,fontWeight:700}}>
              {current.marks}M
            </span>
            {current.year && (
              <span style={{background:'rgba(255,255,255,0.05)',color:'var(--text-muted)',border:'1px solid var(--border)',borderRadius:5,padding:'2px 8px',fontSize:11,fontFamily:'var(--font-mono)'}}>
                {current.year}
              </span>
            )}
          </div>
        </div>

        {!showAnswer ? (
          <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
            <button className="btn btn-primary" onClick={() => setShowAnswer(true)}>
              Show Answer / Hint
            </button>
            <button className="btn btn-outline" onClick={() => next()}>
              Skip →
            </button>
            <button className="btn btn-ghost btn-sm" onClick={reset}>
              Reset
            </button>
          </div>
        ) : (
          <>
            <div className="quiz-answer">
              <div style={{fontSize:11,fontWeight:700,color:'var(--accent)',textTransform:'uppercase',letterSpacing:'0.6px',marginBottom:8}}>
                💡 Key Points / How to Approach
              </div>
              <p style={{lineHeight:1.7,color:'var(--text-secondary)'}}>{getHint(current)}</p>
            </div>
            <div style={{display:'flex',gap:10,marginTop:16,flexWrap:'wrap'}}>
              <button className="btn btn-primary" style={{background:'var(--green)'}} onClick={() => next(true)}>
                ✓ I knew this
              </button>
              <button className="btn btn-outline" style={{borderColor:'var(--red)',color:'var(--red)'}} onClick={() => next(false)}>
                ✗ Need to revise
              </button>
              <button className="btn btn-ghost btn-sm" onClick={reset} style={{marginLeft:'auto'}}>
                Reset All
              </button>
            </div>
          </>
        )}
      </div>

      {score.attempted > 0 && (
        <div className="card mt-16" style={{textAlign:'center'}}>
          <div style={{fontSize:13,color:'var(--text-muted)',marginBottom:8}}>Session Score</div>
          <div style={{fontSize:28,fontWeight:700,color:'var(--green)'}}>
            {Math.round((score.correct/score.attempted)*100)}%
          </div>
          <div style={{fontSize:12,color:'var(--text-muted)',marginTop:4}}>
            {score.correct} correct out of {score.attempted} attempted
          </div>
        </div>
      )}
    </div>
  )
}
