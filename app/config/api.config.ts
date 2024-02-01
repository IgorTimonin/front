export const API_URL = `${process.env.APP_URL}/api`

export const getGenresURL = (string: string) => `/genres${string}`
export const getUsersURL = (string: string) => `/users${string}`
export const getMoviesURL = (string: string) => `/movies${string}`
export const getAuthURL = (string: string) => `/auth${string}`
export const getActorsURL = (string: string) => `/actors${string}`
export const getRatingsURL = (string: string) => `/ratings${string}`
