
export interface AppState {
  zoom: number,
  unit: string,
  scale: number,
	selectedLayer: ComponentData | LayoutData | null,
  selectedArtboard: ArtboardData | null,
	artboards: ArtboardData[]
}

export interface MetaData {
	id: string,
	name: string,
	width: number,
	height: number,
	xamlCode?: string,
	csharpCode?: string
}

export interface PropertyData {
	id: string,
	designCategory: string,
	designName: string,
	designValue: number | string | ComponentData,	
	designUnit?: string,		
	codeName: string
	codeValue: number | string,
}

export interface LayoutData extends ComponentData {
	children: ComponentData[]
}

export interface ComponentData extends MetaData {
	artboardId: string,
	properties: PropertyData[]
}

export interface ArtboardData extends MetaData {
	pageName: string,
	imagePath?: string,
	components: (LayoutData | ComponentData)[]
}