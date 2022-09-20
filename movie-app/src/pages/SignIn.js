import React, {useState} from 'react'
import Layout from '../components/Layout'
import { supabase } from '../supabase'
function SignIn() {
  const [email, setEmail] = useState("");
 const [message , setMessage] = useState("");
  const handleSignIn = async (e) => {
    e.preventDefault()

    const {error} = await supabase.auth.signIn({email})

    if(error){
      console.log(error)
    } else{
 setMessage("Magic Link has been sent.")
    }
  }
  return (
    <div>
        <Layout>
          {message && message}
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
          <button type='submit'>Sign In</button>
        </form>
        </Layout>
     
    </div>
  )
}

export default SignIn
