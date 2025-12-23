import React from 'react'
import membersData from '../data/members.json'

const imgPath = (fileName) => new URL(`../assets/images/members/${fileName}`, import.meta.url).href

export default function Members() {
  const { members } = membersData
  return (
    <section>
      <h2>Members</h2>
      <ul className="list">
        {members.map((m) => (
          <li key={m.id} className="list-item">
            <img src={imgPath(m.image)} alt={m.name} className="avatar" />
            <div className="item-content">
              <strong>{m.name}</strong>
              <div className="muted">{m.role}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
