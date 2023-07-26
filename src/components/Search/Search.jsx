import React, { useState } from 'react'
import styles from "./Search.module.css"
import search from "../../images/search.svg"
import { useDispatch } from 'react-redux'
import { searchItem } from "../../store/feautures/searchSlice"


const Search = () => {
  const [item,setItem] = useState("")
  const dispatch = useDispatch()
  const handleSearch = () =>{
    dispatch(searchItem(item))
  }


 
  return (
    <div className={styles.search}>

        <input type='text' placeholder='Поиск' value={item}  className={styles.inputSearch} onChange={(e)=>setItem(e.target.value)} />
        <div  className={styles.searchImg}>

        <img src={search} alt='search'  className={styles.searchImg} onClick={handleSearch}/>

        </div>
        


    </div>
  )
}

export default Search