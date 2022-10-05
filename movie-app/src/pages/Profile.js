import React, {useEffect, useState} from 'react'
import Layout from "../components/Layout"
import {supabase} from "../supabase";
import {useAuth} from "../auth";

function Profile() {
  const auth = useAuth();
const getWatchlist = async () => {
const {data, error} = await supabase 
.from("watchlists")
.select("movie_id")
.match({user_id: auth.user.id})

if(error){
  console.log(error)
}

console.log(data)
}

  useEffect(() => {
getWatchlist()
  })
  return (
 <Layout>
    <h1>Watchlist</h1>
 </Layout>
  )
}

export default Profile
