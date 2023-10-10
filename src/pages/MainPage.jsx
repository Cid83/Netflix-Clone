import axios from "axios"
import { options } from "../constants/constants"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ActionTypes } from "../constants/actionTypes"
import Hero from "../components/Hero"
import {setLoading, getMovies, getGenres} from '../redux/actions/actions'
import ListMovies from "../components/ListMovies"


const MainPage = () => {

  const state =  useSelector((store)=>store.movieReducer)
  
  const dispatch=useDispatch()

  useEffect(()=>{

    dispatch(setLoading(true))

    dispatch(getMovies())

    dispatch(getGenres())

  },[])


  return (
    <div>
      <Hero/>
      {state.genres.map((genre) => (
        <ListMovies key={genre.id} genre={genre} />
      ))}
    
    </div>
  )
}

export default MainPage