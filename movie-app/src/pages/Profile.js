import React, {useEffect, useState} from 'react'
import Layout from "../components/Layout"
import {supabase} from "../supabase";
import {useAuth} from "../auth";
import axios from 'axios';
import MovieCard from '../components/MovieCard';

function Profile() {

  const auth = useAuth();
const [movies, setMovies] = useState([])
const getWatchlist = async () => {
  let movies = [];
const {data, error} = await supabase 
.from("watchlists")
.select("movie_id")
.match({user_id: auth.user.id})

if(error){
  console.log(error)
}

if(data){
  for(const movie of data){
  const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movie.movie_id}`,{
    params:{
      api_key:"57e19e5c44a33653ce6bfc54743c9e2e"
    }
  })
movies.push(data)
}
setMovies(movies);
}
}

  useEffect(() => {
getWatchlist()
  })
  const renderWatchlist = () => {
    return movies.map(movie => (
    <MovieCard movie={movie} swipe={true}/>
    ))
  }
  return (
 <Layout>
    <h1>Watchlist</h1>
<div className="grid">
{renderWatchlist()}
</div>
    
 </Layout>
  )
}

export default Profile
