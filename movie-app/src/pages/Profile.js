import React, {useEffect, useState} from 'react'
import Layout from "../components/Layout"
import {supabase} from "../supabase";
import {useAuth} from "../auth";

function Profile() {
  return (
 <Layout>
    <h1>Watchlist</h1>
 </Layout>
  )
}

export default Profile
