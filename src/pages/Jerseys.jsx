import React from 'react'
import jerseysData from '../data/jerseys.json'

const localImgForName = (name) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  return new URL(`../assets/images/jerseys/${slug}.svg`, import.meta.url).href
}

export default function Jerseys() {
  const { jerseys } = jerseysData
  const sorted = [...jerseys].sort((a, b) => (a.id ?? 0) - (b.id ?? 0))
  const isRemote = (s) => /^https?:\/\//i.test(s)
  const local = (file) => new URL(`../assets/images/jerseys/${file}`, import.meta.url).href

  return (
    <section className="page">
      <h2>Jerseys</h2>
      <ul className="jerseys-grid">
        {sorted.map((j, idx) => {
          let src = ''
          if (j.img) {
            src = isRemote(j.img) ? j.img : local(j.img)
          } else {
            src = local(localImgForName(j.name))
          }

          const key = j.id ?? idx
          return (
            <li key={key} className="jersey-card">
              <img src={src} alt={j.name} className="jersey-img" />
              <div className="jersey-caption">
                {j.url ? (
                  <a href={j.url} target="_blank" rel="noreferrer" className="jersey-link">{j.name}</a>
                ) : (
                  <span className="jersey-name">{j.name}</span>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
