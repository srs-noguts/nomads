import React from 'react'
import locationsData from '../data/locations.json'

export default function Locations() {
  const { locations } = locationsData
  const sortedLocations = [...locations].slice().sort((a, b) => a.name.localeCompare(b.name))

  // state counts for summary
  const stateCounts = locations.reduce((acc, loc) => {
    const s = loc.state || 'California'
    acc[s] = (acc[s] || 0) + 1
    return acc
  }, {})

  const statesSorted = Object.keys(stateCounts).sort()

  return (
    <section className="page">
      <h2>Locations</h2>
      <p className="locations-intro">The follow is a list of all the leagues and locations we have umpired.</p>

      <ul className="list loc-list">
        {sortedLocations.map((l, i) => (
          <li key={i} className="list-item">
            <div className="item-content">
              <span className="loc-with-tooltip" title={l.address || ''} tabIndex={l.url ? undefined : 0}>
                {l.url ? (
                  <a href={l.url} target="_blank" rel="noreferrer" className="loc-name">{l.name}</a>
                ) : (
                  <span className="loc-name">{l.name}</span>
                )}
                <span className="location-state"> ({l.state || 'California'})</span>
                {l.address && (
                  <span className="tooltip-text">{l.address}</span>
                )}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="state-summary">
        <h3 className="state-summary-title">States</h3>
        <ul className="state-list">
          {statesSorted.map((s) => (
            <li key={s} className="state-list-item">{s} — <strong>{stateCounts[s]}</strong></li>
          ))}
        </ul>
        <div className="total-count">Total locations: <strong>{locations.length}</strong></div>
      </div>
    </section>
  )
}
