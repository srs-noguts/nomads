import React from 'react'
import jerseysData from '../data/jerseys.json'

const imgPath = (fileName) => new URL(`../assets/images/jerseys/${fileName}`, import.meta.url).href

export default function Jerseys() {
  const { jerseys } = jerseysData
  return (
    <section>
      <h2>Jerseys</h2>
      <ul className="list">
        {jerseys.map((j) => (
          <li key={j.id} className="list-item">
            <img src={imgPath(j.image)} alt={`Jersey ${j.number}`} className="jersey" />
            <div className="item-content">
              <strong>#{j.number}</strong> — {j.owner}
              <div className="muted">{j.color}, {j.size}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
