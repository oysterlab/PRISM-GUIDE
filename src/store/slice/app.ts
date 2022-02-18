import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState, ArtboardData } from '../interface'

export const MAX_ZOOM = 4
export const MIN_ZOOM = 0.25

export const ZOOM_STEP = 0.25

const appState:AppState = <AppState>{
  zoom: 1,
  unit: 'px',
  scale: 1,
  selectedLayer: null,
  selectedArtboard: null,
  current: null,
  artboards: []
}

appState.artboards = Array.from(new Array(20)).map((_,i) => {
  const artboard:ArtboardData =     {
    name: "Sample" + i,
    pageName: "SamplePage" + i,
    id: "4akd-a9248-fvm2-" + i,
    width: 1920,
    height: 1080,
    components: [

    ],    
    imagePath: 'https://webrfree.com/wp-content/uploads/2018/09/1920x1080_Abstract_4185.jpg'
  }
  return artboard
})

export const app = createSlice({
  name: 'app',
  initialState: appState,
  reducers: {
    zoom(state, value: PayloadAction<number>) {
      state.zoom += value.payload;
      ((state.zoom > MAX_ZOOM) && (state.zoom = MAX_ZOOM));
      ((state.zoom < MIN_ZOOM) && (state.zoom = MIN_ZOOM));
    },
    selectArtboard(state, artboardIdx: PayloadAction<number>) {
      state.selectedArtboard = state.artboards[artboardIdx.payload]
    }
  }
})

export const { zoom, selectArtboard } = app.actions
export default app.reducer
