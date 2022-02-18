import React from 'react'
import { selectArtboard as selectArboardAction } from '../../../store/slice/app'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'

function Navbar() {
  const dispatch = useAppDispatch()
  const artboards = useAppSelector(state=>state.app.artboards)
  const selectedArtboard = useAppSelector(state=>state.app.selectedArtboard)
  
  const selectArtboard = (idx:number) => dispatch(selectArboardAction(idx))

  return (
    <aside className="navbar on">
      <section id="artboards">
          <ul className="artboard-list">
            {artboards.map(({id, name, pageName, imagePath}, i) => {
              const isSelected = (selectedArtboard?.id == id) ? 'active' : ''

              return (
                <li id={`artboard-${i}`} className={`artboard ${isSelected}`} onClick={() => selectArtboard(i)} key={`artboard-${i}`}>
                    <picture className="preview-img" ><img src={imagePath} /></picture>
                    <div>
                      <h3>{name}</h3>
                      <small>{pageName}</small>
                    </div>
                </li>                
              )              
            })}
          </ul>
      </section>
    </aside>
  )  
}

export default Navbar