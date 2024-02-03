'use client'
import { FC } from "react"
import { useSearch } from "./useSearch"
import SearchList from "./SearchList/SearchList"
import SearchField from "@/components/ui/searchField/SearchField"
import styles from './Search.module.scss'

const Search
: FC = () => {
  const { isSuccess, handleSearch, searchTerm, data} = useSearch()
  return (
    <div className={styles.wrapper}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch}/>
      {isSuccess && <SearchList movies={data || []} />}
    </div>
  )
}

export default Search
