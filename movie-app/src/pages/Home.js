import React ,{useEffect}from 'react'
import Layout from '../components/Layout'

function Home() {
  const fetchMovies = async () =>{
    
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
