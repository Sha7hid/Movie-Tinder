import React, {useState} from 'react'
import Layout from '../components/Layout'
import { supabase } from '../supabase'
import { useAuth } from '../auth'
const Profile = () => {
    const auth = useAuth()
    const [image, setImage] =  useState()
    const [username, setUsername] = useState("")
    const [website, setWebsite] = useState("")
    const [avatarUrl, setAvatarUrl] = useState("")
const [message, setMessage] = useState("")
    const handleSubmit = async (e) => {
e.preventDefault()

if(image){
    const {data, error} = await supabase.storage.from("avatars").upload(`${Date.now()}_${image.name}`,image)

if(error){
    console.log(error)
}
if(data){
setAvatarUrl(data.Key)
const name = avatarUrl;
console.log(name)
}

}

const {data, error} = await supabase.from("profiles").upsert({
id: auth.user.id,
username: username,
website: website,
avatar_url: avatarUrl
})
if(error){
    console.log(error)
}
if(data){
    setMessage("Profile has been updated")
}
}

return (
<Layout>
    {message && message}
    <h1>Profile</h1>
    {avatarUrl ? <img src={`https://plzmnbpsodtbagocourr.supabase.co/storage/v1/object/public/${avatarUrl}`} width={200} alt=""/> : "No Avatar set"}
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
