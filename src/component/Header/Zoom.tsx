import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { MAX_ZOOM, MIN_ZOOM, ZOOM_STEP } from '../../store/slice/app';
import { zoom as zoomAction } from '../../store/slice/app'

function Zoom() {
  const zoom = useAppSelector(state=>state.app.zoom)
  const dispatch = useAppDispatch()

  return (
    <div id="zoom" className="zoom-widget">
      <button className="zoom-in" onClick={() => dispatch(zoomAction(-ZOOM_STEP))} disabled={zoom==MIN_ZOOM}></button>
      <label className="zoom-text">{`${(zoom * 100) | 0}%`}</label>
      <button className="zoom-out" onClick={() => dispatch(zoomAction(ZOOM_STEP))} disabled={zoom==MAX_ZOOM}></button>
    </div>
  )
}

export default Zoom