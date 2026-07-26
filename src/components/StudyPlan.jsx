import { useState } from 'react'
import { studyPlan } from '../data/studyPlan'

export default function StudyPlan() {
  const [checks, setChecks] = useState(() => {
    try { return JSON.parse(localStorage.getItem('dsa_task_checks') || '{}') }
    catch { return {} }
  })

  const toggle = (key) => {
    const next = { ...checks, [key]: !checks[key] }
    setChecks(next)
    localStorage.setItem('dsa_task_checks', JSON.stringify(next))
  }

  const totalTasks = studyPlan.reduce((s, d) => s + d.tasks.length, 0)
  const doneTasks = Object.values(checks).filter(Boolean).length

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">7-Day Study Plan</h1>
        <p className="page-subtitle">DSA Exam — August 2, 2026 · Priority-based revision schedule</p>
      </div>

      {/* Progress */}
      <div className="card mb-20">
        <div className="flex items-center justify-between mb-12">
          <span style={{fontSize:13,fontWeight:600,color:'var(--text-primary)'}}>Overall Progress</span>
          <span style={{fontSize:13,color:'var(--text-muted)'}}>{doneTasks}/{totalTasks} tasks completed</span>
        </div>
        <div className="progress-bar-wrap">
          <div className="progress-bar-fill" style={{width:`${Math.round((doneTasks/totalTasks)*100)}%`,background:'var(--green)'}} />
        </div>
        <div style={{fontSize:12,color:'var(--text-muted)',marginTop:8}}>
          {Math.round((doneTasks/totalTasks)*100)}% complete
        </div>
      </div>

      {/* Exam Rule */}
      <div className="alert alert-warning mb-20">
        <span className="alert-icon">⚡</span>
        <div className="alert-content">
          <strong>Focus Strategy</strong>
          HIGH priority topics (AVL, Infix→Postfix, Linked Lists) are worth 40+ marks alone. Never skip them for low priority topics.
        </div>
      </div>

      {/* Days */}
      {studyPlan.map((day, di) => {
        const dayDone = day.tasks.filter((_, ti) => checks[`${di}-${ti}`]).length
        return (
          <div key={di} className="card mb-16" style={{borderLeft:`3px solid ${day.color}`}}>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-12">
                <div style={{width:36,height:36,borderRadius:10,background:day.color+'22',color:day.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:800,flexShrink:0}}>
                  D{di+1}
                </div>
                <div>
                  <div style={{fontSize:14,fontWeight:700,color:'var(--text-primary)'}}>{day.label}</div>
                  <div style={{fontSize:11,color:'var(--text-muted)',marginTop:2}}>
                    {dayDone}/{day.tasks.length} tasks done
                  </div>
                </div>
              </div>
              <div style={{
                background: dayDone === day.tasks.length ? 'var(--green-light)' : day.color+'22',
                color: dayDone === day.tasks.length ? 'var(--green)' : day.color,
                border: `1px solid ${dayDone === day.tasks.length ? 'rgba(34,197,94,0.3)' : day.color+'44'}`,
                borderRadius: 8, padding: '4px 10px', fontSize: 12, fontWeight: 700
              }}>
                {dayDone === day.tasks.length ? '✅ Done' : `${Math.round((dayDone/day.tasks.length)*100)}%`}
              </div>
            </div>
            <div style={{marginTop:4}}>
              {day.tasks.map((task, ti) => {
                const key = `${di}-${ti}`
                const done = checks[key]
                return (
                  <div key={ti} className="checklist-item" onClick={() => toggle(key)}>
                    <div className={`checklist-checkbox ${done ? 'checked' : ''}`}>
                      {done && <span style={{color:'white',fontSize:11,fontWeight:700}}>✓</span>}
                    </div>
                    <span className={`checklist-text ${done ? 'done' : ''}`}>{task}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
