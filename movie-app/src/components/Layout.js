import React from 'react'
import { Link } from 'react-router-dom'

function Layout({children}) {
  return (
    <div>
        <header>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/sign-In"}>SignIn</Link></li>
            </ul>
        </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
