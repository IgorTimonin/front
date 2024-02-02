import { getMoviesURL } from "@/config/api.config"
import { IMovie } from "@/shared/types/movie.types"
import { axiosBase } from "api/interceptors"

export const MovieService = {
  async getAll(searchTerm?: string) {
    return axiosBase.get<IMovie[]>(getMoviesURL(''), {
      params: searchTerm ? { searchTerm, } : {}
    })
  },

  async getPopularMovies() {
    const { data: movies } = await axiosBase.get<IMovie[]>(
      getMoviesURL('/most-popular')
    )
    return movies
  },
}