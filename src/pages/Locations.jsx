import React from 'react'
import locationsData from '../data/locations.json'

export default function Locations() {
  const { locations } = locationsData
  const sorted = [...locations].sort((a, b) => a.name.localeCompare(b.name))
  return (
    <section className="page">
      <h2>Locations</h2>
      <ul className="list loc-list">
        {sorted.map((l, i) => (
          <li key={i} className="list-item">
            <div className="item-content">
              <span className="loc-with-tooltip" title={l.address || ''} tabIndex={l.url ? undefined : 0}>
                {l.url ? (
                  <a href={l.url} target="_blank" rel="noreferrer" className="loc-name">{l.name}</a>
                ) : (
                  <span className="loc-name">{l.name}</span>
                )}
                {l.address && (
                  <span className="tooltip-text">{l.address}</span>
                )}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
