export interface IFav {
    track: ITrack
}

export interface ITrack {
    id: number
    title: string
    audioUrl: string
    album?: IAlbum
}

export interface IAlbum {
    id: number
    name: string
    author: IArtist
}

export interface IArtist {
    id: number
    name: string
}
