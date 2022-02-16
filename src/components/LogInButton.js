import React, {useState} from "react";

export default function LogInButton() {
    const [loggedIn, setLoggedIn] = useState(false);
    const loggedInHandler = () => {
        setLoggedIn(!loggedIn)
    }
  return(
    <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn ? "Log Out" : "Log in"}</button>
  )
}