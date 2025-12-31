import React from 'react'
import membersData from '../data/members.json'

const imgPath = (fileName) => new URL(`../assets/images/members/${fileName}`, import.meta.url).href

function ImagePreview({ src, alt }) {
  const [visible, setVisible] = React.useState(false)
  const timerRef = React.useRef(null)
  const wrapperRef = React.useRef(null)
  const popoverRef = React.useRef(null)
  const hoverSupported = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover)').matches

  React.useEffect(() => {
    function hide() {
      // if the popover currently has focus, move it back to the wrapper before hiding
      if (popoverRef.current && popoverRef.current.contains(document.activeElement)) {
        wrapperRef.current?.focus()
      }
      setVisible(false)
    }

    function onDocClick(e) {
      if (visible && wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        hide()
      }
    }
    function onEsc(e) {
      if (e.key === 'Escape') hide()
    }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onEsc)
    }
  }, [visible])

  React.useEffect(() => {
    if (visible) {
      // bring the popover into focus for keyboard users
      popoverRef.current?.focus()
    }
  }, [visible])

  const start = () => {
    if (!hoverSupported) return
    timerRef.current = setTimeout(() => setVisible(true), 500)
  }
  const cancel = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = null
    // if the popover has focus, move focus back before hiding to avoid aria-hidden conflicts
    if (popoverRef.current && popoverRef.current.contains(document.activeElement)) {
      wrapperRef.current?.focus()
    }
    setVisible(false)
  }
  // open popover on click (useful for mobile/touch)
  const handleClick = (e) => {
    e.stopPropagation()
    setVisible(true)
  }
  const close = (e) => {
    if (e) e.stopPropagation()
    if (popoverRef.current && popoverRef.current.contains(document.activeElement)) {
      wrapperRef.current?.focus()
    }
    setVisible(false)
  }

  return (
    <span
      className="img-preview-wrap"
      ref={wrapperRef}
      tabIndex={0}
      onMouseEnter={start}
      onMouseLeave={cancel}
      onFocus={start}
      onBlur={cancel}
      onClick={handleClick}
      aria-haspopup="dialog"
      aria-expanded={visible}
    >
      <img src={src} alt={alt} className="avatar" />
      <div
        className={`image-popover ${visible ? 'show' : ''}`}
        role="dialog"
        aria-hidden={!visible}
        ref={popoverRef}
        tabIndex={-1}
      >
        <img src={src} alt={alt} />
      </div>
    </span>
  )
}

export default function Members() {
  const { members } = membersData
  return (
    <section className="page">
      <h2>Members</h2>
      <ul className="list">
        {members.map((m) => (
          <li key={m.id} className="list-item">
            <ImagePreview src={imgPath(m.image)} alt={m.name} />
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
