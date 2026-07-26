import { Trophy, Clock, Target, BookOpen } from 'lucide-react'

export default function ExamStrategy() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Exam Strategy</h1>
        <p className="page-subtitle">DSA (24CS304) — MCE Hassan · August 2, 2026 · 3 Hours · 100 Marks</p>
      </div>

      {/* Critical Alert */}
      <div className="alert alert-danger mb-20">
        <span className="alert-icon">🚨</span>
        <div className="alert-content">
          <strong>LAST ATTEMPT — Stay Calm & Strategic</strong>
          You need only 40/100 to pass. The 5 must-know topics (AVL, Infix→Postfix, Circular LL, SLL, BST) alone = 40-50 marks.
          Never leave a question completely blank.
        </div>
      </div>

      {/* Paper Pattern */}
      <div className="card mb-20">
        <div style={{fontSize:14,fontWeight:700,color:'var(--text-primary)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>
          <BookOpen size={16} color="var(--accent)" /> Paper Pattern
        </div>
        <div style={{overflowX:'auto'}}>
          <table className="theory-table">
            <thead><tr><th>Feature</th><th>Details</th></tr></thead>
            <tbody>
              {[
                ['Duration', '3 Hours (180 minutes)'],
                ['Total Marks', '100'],
                ['Total Questions', '8 questions (2 per module × 4 modules)'],
                ['Questions to Answer', 'Any 5 — but at least 1 from EACH module'],
                ['Marks per Question', '20 marks each'],
                ['Pass Mark', '40 out of 100 (40%)'],
                ['Subject Code', '24CS304'],
              ].map(([k,v],i) => (
                <tr key={i}>
                  <td style={{fontWeight:600,color:'var(--text-primary)'}}>{k}</td>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Time Budget */}
      <div className="card mb-20">
        <div style={{fontSize:14,fontWeight:700,color:'var(--text-primary)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>
          <Clock size={16} color="var(--orange)" /> Time Budget — 180 Minutes
        </div>
        <div className="card-grid card-grid-2">
          {[
            { label:'Read all 8 questions', time:'5 min', color:'var(--blue)', tip:'Mark the 5 you will attempt. Plan order.' },
            { label:'Q from Module 1', time:'30 min', color:'var(--red)', tip:'Infix→Postfix trace OR Stack operations' },
            { label:'Q from Module 2', time:'30 min', color:'var(--orange)', tip:'Recursion (Tower of Hanoi / Fibonacci) + Queue + SLL operations' },
            { label:'Q from Module 3', time:'30 min', color:'var(--yellow)', tip:'Circular LL OR Doubly LL OR linked stack/queue' },
            { label:'Q from Module 4', time:'30 min', color:'var(--green)', tip:'AVL tree 63,9,19,27,18,108,99,81 OR BST construct + Inorder/Preorder/Postorder traversals' },
            { label:'5th Question (easiest)', time:'20 min', color:'var(--purple)', tip:'Pick from remaining — recursion, queue, theory' },
            { label:'Revision', time:'35 min', color:'var(--accent)', tip:'Check traces, verify algorithms, add diagrams' },
          ].map((item,i) => (
            <div key={i} style={{background:'var(--bg-secondary)',border:'1px solid var(--border)',borderRadius:8,padding:'12px 14px',borderLeft:`3px solid ${item.color}`}}>
              <div className="flex items-center justify-between mb-6">
                <span style={{fontSize:13,fontWeight:600,color:'var(--text-primary)'}}>{item.label}</span>
                <span style={{background:item.color+'22',color:item.color,border:`1px solid ${item.color}44`,borderRadius:6,padding:'2px 8px',fontSize:12,fontWeight:700}}>
                  {item.time}
                </span>
              </div>
              <div style={{fontSize:12,color:'var(--text-muted)'}}>{item.tip}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Must-Know = Pass */}
      <div className="card mb-20">
        <div style={{fontSize:14,fontWeight:700,color:'var(--text-primary)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>
          <Target size={16} color="var(--green)" /> 5 Topics = Pass Guaranteed (40+ marks)
        </div>
        <div className="alert alert-success mb-12">
          <span className="alert-icon">✅</span>
          <div className="alert-content">
            Write these 5 correctly: definition + algorithm + trace/diagram → you WILL pass. Each is worth 8-10 marks.
          </div>
        </div>
        {[
          { topic:'AVL Tree: 63,9,19,27,18,108,99,81', mod:'M4', freq:9, marks:'10M', tip:'Module 4 ONLY. Insert step-by-step, show BF after each insert, name each rotation (LL/RR/LR/RL)' },
          { topic:'Infix to Postfix (stack trace table)', mod:'M1', freq:8, marks:'10M', tip:'Draw the table: Symbol | Stack | Output. Use correct precedence rules.' },
          { topic:'Circular Linked List (insert begin/end)', mod:'M3', freq:8, marks:'10M', tip:'Show last->next=head. Draw diagram. Write C function with do-while display.' },
          { topic:'Singly Linked List (insert/delete/search)', mod:'M2', freq:8, marks:'10M', tip:'insertBegin, deleteFirst, deleteAfterKey. Use malloc, draw before/after diagrams.' },
          { topic:'BST: 45,39,56,12,34,78,32,10,89,54,67,81', mod:'M4', freq:6, marks:'10M', tip:'Draw tree step by step. Show inorder, preorder, postorder traversal.' },
        ].map((item,i) => (
          <div key={i} style={{display:'flex',gap:12,padding:'12px 0',borderBottom:i<4?'1px solid rgba(255,255,255,0.04)':'none',flexWrap:'wrap'}}>
            <div style={{width:28,height:28,borderRadius:8,background:'var(--green-light)',color:'var(--green)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,fontWeight:700,flexShrink:0}}>
              {i+1}
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:13,fontWeight:600,color:'var(--text-primary)',marginBottom:4}}>
                {item.topic}
                <span style={{fontSize:11,marginLeft:8,padding:'1px 6px',borderRadius:4,background:'var(--bg-secondary)',color:'var(--text-muted)'}}>{item.mod}</span>
                <span style={{fontSize:11,marginLeft:4,padding:'1px 6px',borderRadius:4,background:'var(--red-light)',color:'var(--red)',fontWeight:700}}>Appeared {item.freq}×</span>
              </div>
              <div style={{fontSize:12,color:'var(--text-muted)'}}>💡 {item.tip}</div>
            </div>
            <div style={{fontSize:13,fontWeight:700,color:'var(--green)',background:'var(--green-light)',border:'1px solid rgba(34,197,94,0.3)',borderRadius:6,padding:'4px 10px',height:'fit-content',flexShrink:0}}>
              {item.marks}
            </div>
          </div>
        ))}
      </div>

      {/* Answer Format */}
      <div className="card mb-20">
        <div style={{fontSize:14,fontWeight:700,color:'var(--text-primary)',marginBottom:16}}>
          ✍️ Answer Writing Format
        </div>
        <div className="card-grid card-grid-2">
          <div>
            <div style={{fontSize:12,fontWeight:600,color:'var(--accent)',marginBottom:10,textTransform:'uppercase',letterSpacing:'0.5px'}}>For Algorithm/Theory Questions</div>
            {['1. Definition (1-2 sentences)','2. Algorithm / Pseudocode (numbered steps)','3. Trace / Example (tabular form)','4. Diagram (box/arrow diagram)','5. Time Complexity (mention O(n) or O(log n))'].map((s,i) => (
              <div key={i} style={{fontSize:13,color:'var(--text-secondary)',padding:'6px 0',borderBottom:i<4?'1px solid rgba(255,255,255,0.04)':'none'}}>{s}</div>
            ))}
          </div>
          <div>
            <div style={{fontSize:12,fontWeight:600,color:'var(--orange)',marginBottom:10,textTransform:'uppercase',letterSpacing:'0.5px'}}>For C Program Questions</div>
            {['1. #include<stdio.h>, #include<stdlib.h>','2. struct Node definition (if linked list)','3. Global variables (head, top, front, rear)','4. Function implementations with comments','5. void main() to demonstrate usage'].map((s,i) => (
              <div key={i} style={{fontSize:13,color:'var(--text-secondary)',padding:'6px 0',borderBottom:i<4?'1px solid rgba(255,255,255,0.04)':'none'}}>{s}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Partial Marks */}
      <div className="card mb-20">
        <div style={{fontSize:14,fontWeight:700,color:'var(--text-primary)',marginBottom:16}}>
          ⚡ Partial Marks Strategy
        </div>
        <div className="alert alert-warning mb-12">
          <span className="alert-icon">💰</span>
          <div className="alert-content">
            <strong>Even wrong answers can earn marks!</strong>
            Examiners award marks for effort. Correct structure + correct variable names + partially correct logic = 5-6 marks.
          </div>
        </div>
        {[
          { action:'Write correct struct definition for linked list', marks:'2-3 marks' },
          { action:'Write correct function signature and local variables', marks:'1-2 marks' },
          { action:'Write partially correct algorithm/logic', marks:'3-5 marks' },
          { action:'Write correct definition and explanation', marks:'3-4 marks' },
          { action:'Draw correct diagram (even if code is wrong)', marks:'2-3 marks' },
        ].map((item,i) => (
          <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',borderBottom:i<4?'1px solid rgba(255,255,255,0.04)':'none',flexWrap:'wrap',gap:8}}>
            <div style={{fontSize:13,color:'var(--text-secondary)'}}>✦ {item.action}</div>
            <div style={{fontSize:12,fontWeight:700,color:'var(--yellow)',background:'var(--yellow-light)',border:'1px solid rgba(234,179,8,0.3)',borderRadius:5,padding:'2px 8px',flexShrink:0}}>
              +{item.marks}
            </div>
          </div>
        ))}
      </div>

      {/* Exam Day Checklist */}
      <div className="card">
        <div style={{fontSize:14,fontWeight:700,color:'var(--text-primary)',marginBottom:16}}>
          📋 Exam Day Checklist — August 2, 2026
        </div>
        {[
          { icon:'📄', item:'Hall ticket printed and ready', time:'Night before' },
          { icon:'🪪', item:'College ID card', time:'Night before' },
          { icon:'🖊️', item:'2-3 pens + pencil for diagrams (tree drawing)', time:'Night before' },
          { icon:'😴', item:'Sleep by 10 PM on August 1', time:'Aug 1' },
          { icon:'🌅', item:'Wake up early, eat light breakfast', time:'Aug 2 morning' },
          { icon:'📖', item:'Quick revision: AVL 63,9,19... + Infix→Postfix trace ONLY', time:'1 hour before' },
          { icon:'⏱️', item:'Reach exam hall 30 minutes early', time:'Aug 2' },
          { icon:'🧘', item:'Read ALL 8 questions for first 5 minutes, circle which 5 to attempt', time:'In exam' },
          { icon:'🚫', item:'Never spend more than 35 minutes on any one question', time:'In exam' },
          { icon:'✅', item:'Never leave any question completely blank — write definition at minimum', time:'In exam' },
        ].map((item,i) => (
          <div key={i} style={{display:'flex',gap:10,padding:'10px 0',borderBottom:i<9?'1px solid rgba(255,255,255,0.04)':'none',alignItems:'flex-start'}}>
            <span style={{fontSize:16,flexShrink:0}}>{item.icon}</span>
            <div style={{flex:1,fontSize:13,color:'var(--text-primary)'}}>{item.item}</div>
            <div style={{fontSize:11,color:'var(--text-muted)',flexShrink:0}}>{item.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
