import { useState } from 'react'
import { modules, allQuestions } from '../data/pyqData'

export default function PYQFrequency() {
  const [activeModule, setActiveModule] = useState('all')

  const displayed = activeModule === 'all'
    ? modules
    : modules.filter(m => String(m.id) === activeModule)

  // Top 5 most repeated across ALL
  const top5 = [
    { rank: 1, question: 'Construct AVL tree: 63, 9, 19, 27, 18, 108, 99, 81', freq: 9, modules: 'M2, M4', badge: 'badge-critical' },
    { rank: 2, question: 'Infix to Postfix conversion using stack (any expression)', freq: 8, modules: 'M1', badge: 'badge-critical' },
    { rank: 3, question: 'Circular Linked List — insert at beginning/end, delete', freq: 8, modules: 'M3', badge: 'badge-critical' },
    { rank: 4, question: 'Singly Linked List — insert, delete, search, display', freq: 8, modules: 'M2', badge: 'badge-critical' },
    { rank: 5, question: 'BST — construct from given numbers, search algorithm', freq: 6, modules: 'M4', badge: 'badge-high' },
  ]

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">PYQ Frequency Analysis</h1>
        <p className="page-subtitle">Which topics appear most often across all DSA exam papers</p>
      </div>

      {/* Top 5 Most Repeated */}
      <div className="card mb-24">
        <div style={{fontSize:14,fontWeight:700,color:'var(--text-primary)',marginBottom:16,display:'flex',alignItems:'center',gap:8}}>
          🏆 Top 5 Most-Repeated Questions (Verbatim)
        </div>
        <div className="alert alert-danger mb-16">
          <span className="alert-icon">🔥</span>
          <div className="alert-content">
            <strong>Guaranteed to appear — These exact questions repeat every year</strong>
            Memorize these 5 completely. They alone can get you 40+ marks.
          </div>
        </div>
        {top5.map((item, i) => (
          <div key={i} style={{display:'flex',gap:12,padding:'14px 0',borderBottom:i<4?'1px solid rgba(255,255,255,0.04)':'none',alignItems:'flex-start'}}>
            <div style={{width:32,height:32,borderRadius:10,background:i<3?'var(--red-light)':'var(--orange-light)',color:i<3?'var(--red)':'var(--orange)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:800,flexShrink:0}}>
              #{item.rank}
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:13,fontWeight:600,color:'var(--text-primary)',lineHeight:1.5,marginBottom:4}}>
                {item.question}
              </div>
              <div style={{fontSize:11,color:'var(--text-muted)'}}>Modules: {item.modules}</div>
            </div>
            <div style={{background:i<3?'var(--red-light)':'var(--orange-light)',color:i<3?'var(--red)':'var(--orange)',border:`1px solid ${i<3?'rgba(239,68,68,0.3)':'rgba(249,115,22,0.3)'}`,borderRadius:8,padding:'4px 10px',fontSize:12,fontWeight:700,flexShrink:0,textAlign:'center'}}>
              {item.freq}×<br/><span style={{fontSize:10,fontWeight:400}}>times</span>
            </div>
          </div>
        ))}
      </div>

      {/* Module Tabs */}
      <div className="tabs mb-20">
        <button className={`tab ${activeModule==='all'?'active':''}`} onClick={()=>setActiveModule('all')}>All Modules</button>
        {modules.map(m => (
          <button key={m.id} className={`tab ${activeModule===String(m.id)?'active':''}`} onClick={()=>setActiveModule(String(m.id))}>
            {m.name}
          </button>
        ))}
      </div>

      {/* Per-module frequency bars */}
      {displayed.map(m => (
        <div key={m.id} className="card mb-16">
          <div className="flex items-center gap-8 mb-16">
            <div style={{width:4,height:24,borderRadius:2,background:m.color}} />
            <span style={{fontSize:14,fontWeight:700,color:m.color}}>{m.name}</span>
            <span style={{fontSize:13,color:'var(--text-secondary)'}}>{m.title}</span>
          </div>
          {[...m.topics].sort((a,b)=>b.frequency-a.frequency).map((t,i) => {
            const maxFreq = Math.max(...m.topics.map(x=>x.frequency))
            const pct = Math.round((t.frequency/maxFreq)*100)
            const barColor = t.frequency >= 7 ? 'var(--red)' : t.frequency >= 5 ? 'var(--orange)' : t.frequency >= 3 ? 'var(--yellow)' : 'var(--text-muted)'
            return (
              <div key={i} style={{marginBottom:14}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:5}}>
                  <span style={{fontSize:13,color:'var(--text-primary)',fontWeight:500,flex:1,marginRight:12,lineHeight:1.4}}>
                    {t.topic}
                  </span>
                  <div style={{display:'flex',alignItems:'center',gap:8,flexShrink:0}}>
                    <span style={{fontSize:11,color:'var(--text-muted)'}}>Up to {t.marks}M</span>
                    <span style={{fontSize:12,fontWeight:700,color:barColor,background:barColor+'22',border:`1px solid ${barColor}44`,borderRadius:5,padding:'1px 7px'}}>
                      {t.frequency}×
                    </span>
                  </div>
                </div>
                <div className="progress-bar-wrap">
                  <div className="progress-bar-fill" style={{width:`${pct}%`,background:barColor}} />
                </div>
                <div className="year-tags mt-8" style={{marginTop:6}}>
                  {t.years.slice(0,5).map((y,j) => <span key={j} className="year-tag">{y}</span>)}
                  {t.years.length > 5 && <span className="year-tag">+{t.years.length-5} more</span>}
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
