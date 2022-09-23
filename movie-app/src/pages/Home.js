import React ,{useEffect}from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
function Home() {
  const fetchMovies = async () =>{
const {data} = await axios.get("https://api.themoviedb.org/3/discover/movie",
params:{
  page:Math.random() * 501,
  api_key:
}
)
  }
  useEffect(()=>{
fetchMovies()
  },[])
  return (
    <div>
        <Layout>
        <h1>Welcome</h1>
        </Layout>
     
    </div>
  )
}

export default Home
