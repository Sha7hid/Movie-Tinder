import React, {useState} from 'react'
import Layout from '../components/Layout'

const Profile = () => {
    const [image, setImage] =  useState()
    const [username, setUsername] = useState("")
    const [website, setWebsite] = useState("")
return (
<Layout>
    <h1>Profile</h1>
    <form>
        <div className="form-group">
<label htmlFor="avatar">Choose Avatar:</label>
        <input type="file" accept={"image/jpeg image/png"}/>
        </div>
        <div className="form-group">

</div>
<div className="form-group">

</div>
<div className="form-group">

</div>
    </form>
</Layout>
  )
}

export default Profile
