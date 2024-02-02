import { TypeMaterialIconsNames } from "./icon.types"

export interface IGenre {
  _id: string
  name: string
  slug: string
  description: string
  icon: TypeMaterialIconsNames
}

export interface IActors {
  _id: string
  name: string
  slug: string
  photo: string
  countMovies: number
}

export interface IParameters {
  year: number
  duration: number
  country: string
}

export interface IMovie{
  _id: string
  title: string
  poster: string
  bigPoster: string
  actors: IActors[]
  genres: IGenre[]
  parameters: IParameters
  videoUrl: string
  rating: number
  slug: string
  countOpened: number
}