import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const MAX_ZOOM = 4
export const MIN_ZOOM = 0.25

export const ZOOM_STEP = 0.25

export interface ArtboardData {
  pageName: string,
  pageObjectID: string,
  name: string,
  objectID: string,
  width: number,
  height: number,
  imagePath?: string,
  imageIconPath?: string,
  imageBase64?: string,
  // notes: SMNote[],
  // layers: LayerData[],
}

export interface AppState {
  zoom: number,
  unit: string,
  scale: number,
  artboardIndex: number|null,
  current: ArtboardData|null,
}

const appState:AppState = <AppState>{
  zoom: 1,
  unit: 'px',
  scale: 1,
  artboardIndex: null,
  current: null,
}

export const app = createSlice({
  name: 'app',
  initialState: appState,
  reducers: {
    zoom(state, value: PayloadAction<number>) {
      state.zoom += value.payload;
      ((state.zoom > MAX_ZOOM) && (state.zoom = MAX_ZOOM));
      ((state.zoom < MIN_ZOOM) && (state.zoom = MIN_ZOOM));
    }
  }
})

export const { zoom } = app.actions
export default app.reducer
