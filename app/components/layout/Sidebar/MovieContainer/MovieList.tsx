import { FC } from "react"
import { IMovieList } from "./MovieList.interface"
import styles from './MovieList.module.scss'
import MovieItem from "./MovieItem"
import Link from "next/link"

const MovieList: FC<IMovieList> = ({ link, title, movies }) => {
  return (
    <div className={styles.list}>
      <div className={styles.heading}>
        {title}
      </div>
      {movies.map(movie => <MovieItem key={movie._id} movie={movie} />)}
      <Link href={link} className={styles.button}>
        Посмотреть все
      </Link>
    </div>
  )
}

export default MovieList  