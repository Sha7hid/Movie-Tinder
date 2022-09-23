import React ,{useEffect, useState}from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import TinderCard from 'react-tinder-card'
import MovieCard from '../components/MovieCard';
function Home() {
  const [movies, setMovies] = useState([])
  const fetchMovies = async () =>{
const {data} = await axios.get("https://api.themoviedb.org/3/discover/movie",{
params:{
  page:Math.random() * 501,
  api_key:"57e19e5c44a33653ce6bfc54743c9e2e"
  }
})

setMovies(data.results);
  }
  useEffect(()=>{
fetchMovies()
  },[])
  const renderMovies = () => {
return movies.map(movie => {
  <TinderCard>
    <MovieCard movie={movie}/>
  </TinderCard>
})
  }
  return (
    <div>
        <Layout>
        <h1>Welcome</h1>
{renderMovies()}
        </Layout>
     
    </div>
  )
}

export default Home
