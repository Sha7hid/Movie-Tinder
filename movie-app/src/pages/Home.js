import React ,{useEffect, useState}from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import TinderCard from 'react-tinder-card'
import MovieCard from '../components/MovieCard';
function Home() {
  
  const [movie, setMovie] = useState([])
 const fecthMovies = async () => {
  const {data} = await axios.get("https://api.themoviedb.org/3/discover/movie",{
    params:{
      page:Math.random() * 501,
      api_key:"57e19e5c44a33653ce6bfc54743c9e2e"
    }
  })
 console.log(data);
const movies = await data;
setMovie(movies.results);
}
 useEffect(() => {
  fecthMovies()
 },[])





return (
  <Layout>
<h1>Welcome</h1>
{movie.map(movie => {
 return <>
 <TinderCard key={movie.id}>
    <MovieCard movie={movie}/>
  </TinderCard>
 </>
})}

  </Layout>
 )
 

}

export default Home
