export const getGenreUrl = (slug:string) => `genre/${slug}`
export const getMovieUrl = (slug:string) => `movie/${slug}`
export const getActorUrl = (slug:string) => `actor/${slug}`

export const getAdminUrl = (url:string) => `manage/${url}`
export const getAdminHomeUrl = () => getActorUrl('').slice(0, -1)