import React from 'react'
import locationsData from '../data/locations.json'

export default function Locations() {
  const { locations } = locationsData
  // Group locations by state
  const groups = locations.reduce((acc, loc) => {
    const s = (loc.state || 'CA').toUpperCase()
    acc[s] = acc[s] || []
    acc[s].push(loc)
    return acc
  }, {})

  const sortedStates = Object.keys(groups).sort()

  return (
    <section className="page">
      <h2>Locations</h2>
      <div className="locations-groups">
        {sortedStates.map((state) => (
          <div key={state} className="state-group">
            <h3 className="state-title">{state}</h3>
            <ul className="list loc-list">
              {groups[state]
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((l, i) => (
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
          </div>
        ))}
      </div>
    </section>
  )
}
