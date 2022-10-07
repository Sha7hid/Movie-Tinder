import React, {useState} from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../auth';
function SignIn() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
 const [message , setMessage] = useState("");
  const handleSignIn = async (e) => {
    e.preventDefault()
 const signIn = await auth.login(email)

 if(signIn.error){
  setMessage(signIn.error.message)
 }else {
  setMessage("login link has been sent.")
 }
 setEmail("")
  }
  return (
    <div>
        <Layout>
          {message && message}
        <h1 className="signin-message">Sign In Or Sign Up</h1><br/>
        <form onSubmit={handleSignIn}>
          <input  className="signin-input" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
          <button type='submit'>Sign In</button>
        </form>
        </Layout>
     
    </div>
  )
}

export default SignIn
