import React ,{useEffect, useState}from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import TinderCard from 'react-tinder-card'
import MovieCard from '../components/MovieCard';
import { createClient } from '@supabase/supabase-js'
import { useAuth } from '../auth';

function Home() {

  const auth = useAuth();
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
  const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
  const supabase = createClient(supabaseUrl, supabaseKey)
  const [movies, setMovies] = useState([])
  const [message, setMessage] = useState("")
  
 const fecthMovies = async () => {
  const {data} = await axios.get("https://api.themoviedb.org/3/discover/movie",{
    params:{
      page:Math.random() * 501,
      api_key:"57e19e5c44a33653ce6bfc54743c9e2e"
    }
  })
 console.log(data);
const movie = await data;
setMovies(movie.results);
}
const addTowatchlist = async (movie) => {

const {data, error} = await supabase.from("watchlists").insert({movie_id : movie.id , user_id: auth.user.id})
if(error){
  console.log(error)
}
if(data){
  setMessage("Movie has been added to your watchlist")
}
}

 useEffect(() => {
  if(auth.user){
    fecthMovies()
  }
  
 
 },[auth])





return (
  <Layout>
    {message&&message}
    <h1 className="welcome">Welcome</h1>
    <h3>Swipe right to add to watchlist 👉</h3><br/>
    {!auth.user && <h2 className="signup">Please sign up</h2>}

{movies.map(movie => {
  
 return <>
 <div className="movie-wrapper">
 <TinderCard
 onSwipe={direction => direction === "right"? addTowatchlist(movie):null}
 key={movie.id}>
    <MovieCard movie={movie}/>
  
  </TinderCard>
 </div>
 
 </>
})}

  </Layout>
 )
 

}

export default Home
