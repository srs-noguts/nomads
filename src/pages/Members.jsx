import React from 'react'
import membersData from '../data/members.json'

const imgPath = (fileName) => new URL(`../assets/images/members/${fileName}`, import.meta.url).href

export default function Members() {
  const { members } = membersData
  return (
    <section className="page">
      <h2>Members</h2>
      <ul className="list">
        {members.map((m) => (
          <li key={m.id} className="list-item">
            <img src={imgPath(m.image)} alt={m.name} className="avatar" />
            <div className="item-content">
              <div className="member-header">
                <strong className="member-name">{m.name}</strong>
                {m.role && <span className="member-role"> - {m.role}</span>}
              </div>
              <div className="member-short">{m.shortDescription}</div>
              <div className="member-long">{m.longDescription}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
