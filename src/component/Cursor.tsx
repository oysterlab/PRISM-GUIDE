import React, { MouseEvent, useEffect, useState } from 'react'

function Cursor() {
  const [[x, y], setPosition] = useState([0, 0])

  useEffect(() => {
    const onMouseMove = (e: globalThis.MouseEvent) => setPosition([e.clientX, e.clientY])
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  })

  return (
    <div id="cursor" className="cursor" style={{left: x+'px', top: y+'px'}}></div>
  )
}

export default Cursor