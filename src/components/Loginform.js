import React from 'react'
import './Style.css'

function Loginform() {
  return (
    <div><div className="container">
    {/* <div className="flex">
        <a href="#" className="btn btn-secondary">New Registration</a>
        <a href="#" className="btn btn-secondary">Login</a>
    </div> */}
</div>
<div className="background">
    {/* <div className="shape"></div> */}
    {/* <div className="shape"></div> */}
</div>
<form method="post" action="/login">
    <h3>Login</h3>

    <label for="email">UserName</label>
    <input type="text" placeholder="email" value="oly" name="email" />
    <label for="password">Password</label>
    <input type="password" placeholder="Password" value="oly" name="password" />

    <button type="button" className="btn-white">Log In</button>
</form>
</div>
  )
}

export default Loginform