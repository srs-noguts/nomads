import React from 'react'
import jerseysData from '../data/jerseys.json'

const imgForName = (name) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  return new URL(`../assets/images/jerseys/${slug}.svg`, import.meta.url).href
}

export default function Jerseys() {
  const { jerseys } = jerseysData
  return (
    <section className="page">
      <h2>Jerseys</h2>
      <ul className="list">
        {jerseys.map((j) => (
          <li key={j.id} className="list-item">
            <img src={imgForName(j.name)} alt={j.name} className="jersey" />
            <div className="item-content">
              <div className="jersey-title"><strong>{j.name}</strong></div>
              {j.url ? (
                <div style={{ marginTop: '0.5rem' }}>
                  <a href={j.url} target="_blank" rel="noreferrer" className="buy-link">Buy this jersey</a>
                </div>
              ) : (
                <div style={{ marginTop: '0.5rem' }} className="muted">No buy link available</div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
