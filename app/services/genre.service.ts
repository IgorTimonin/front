import { getGenresURL } from "@/config/api.config"
import { IGenre } from "@/shared/types/movie.types"
import { axiosBase } from "api/interceptors"

export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosBase.get<IGenre[]>(getGenresURL(''), {
      params: searchTerm ? { searchTerm, } : {}
    })
  },
}