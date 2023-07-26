import React,{useEffect} from 'react'
import styles from "./Home.module.css"
import Search from "../Search"

import { getData } from "../../store/thunk"
import { useDispatch } from 'react-redux'
import Table from '../Table'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getData());

  }, []);
  return (
    <div className={styles.header}>
        <Search />
       <Table />

    </div>
  )
}

export default Home