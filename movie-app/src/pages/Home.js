import React ,{useEffect, useState}from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import TinderCard from 'react-tinder-card'
import MovieCard from '../components/MovieCard';
function Home() {
 const fecthMovies = async () => {
  const {data} = await axios.get("https://api.themoviedb.org/3/discover/movie")
 }
 useEffect(() => {
  fecthMovies()
 },[])
 return (
  <Layout>
<h1>Welcome</h1>
  </Layout>
 )
  
 

}

export default Home
