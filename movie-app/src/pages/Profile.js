import React, {useState} from 'react'
import Layout from '../components/Layout'
import { supabase } from '../supabase'
const Profile = () => {
    const [image, setImage] =  useState()
    const [username, setUsername] = useState("")
    const [website, setWebsite] = useState("")
    const [avatarUrl, setAvatarUrl] = useState("")
const handleSubmit = async (e) => {
e.preventDefault()

if(image){
    const {data, error} = await supabase.storage.from("avatars").upload(`${Date.now()}_${image.name}`,image)
let avatarUrl =""
if(error){
    console.log(error)
}
if(data){
setAvatarUrl(data.Key)
avatarUrl = data.key
}
}

}

return (
<Layout>
    <h1>Profile</h1>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
<label htmlFor="avatar">Choose Avatar:</label>
        <input type="file" accept={"image/jpeg image/png"}
        onChange={e => setImage(e.target.files[0])}
        />
        </div>
        <div className="form-group">

        <label htmlFor="username">Username:</label>
        <input type="text" onChange={e => setUsername(e.target.value)}
         value={username}/>

        </div>
      <div className="form-group">

      <label htmlFor="website">Website:</label>
        <input type="text" onChange={e => setWebsite(e.target.value)}
         value={website}/>

       </div>
     <div className="form-group">

<button type={"submit"}>Save Profile</button>
      </div>

    </form>
</Layout>
  )
}

export default Profile
