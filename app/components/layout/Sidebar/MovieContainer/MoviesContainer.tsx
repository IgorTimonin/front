import { FC } from "react"
import PopularMovies from "./PopularMovies"
import FavoritesMovies from "./FavoritesMovies/FavoritesMovies"

const MoviesContainer: FC = () => {
  return (
    <div>
      <PopularMovies />
      <FavoritesMovies />
    </div>
  )
}

export default MoviesContainer  