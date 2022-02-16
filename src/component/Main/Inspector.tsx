import React from 'react'

function Inspector() {
  return (
    <aside id="inspector" className="inspector active">
      <h2>Two</h2>
      <section>
        <h3>PROPERTIES</h3>
        <div className="context">
          <div className="item" data-label="Position:">
            <label data-label="X">
              <input id="position-x" type="text" defaultValue="101.85px" readOnly/>
            </label>
            <label data-label="Y">
              <input id="position-y" type="text" defaultValue="106px" readOnly/>
            </label>
          </div>
          <div className="item" data-label="Size:">
            <label data-label="Width">
              <input id="size-width" type="text" defaultValue="68px" readOnly />
            </label>
            <label data-label="Height">
              <input id="size-height" type="text" defaultValue="85px" readOnly />
            </label>
          </div>
        </div>
      </section>
      <section>
        <h3>EXPORTABLE</h3>
        <div className="context">
          <ul className="exportable">
            <li><a href="assets/Two.png" target="_blank" data-format="PNG"><img src="assets/Two.png" alt="Two.png" />Two.png</a></li>
          </ul>
        </div>
      </section>
    </aside>
  )
}

export default Inspector