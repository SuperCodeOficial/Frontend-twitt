import React, {useRef, useState}from "react";
import SignInSignUp from "./page/SignInSignUp";

export default function App() {
const [user, setUser] = useState({name:"Max"});

  return (
    <div>
      {user ?(
        <div>
          <SignInSignUp/>
        </div>
      ) :( 
      <h1>No estás Logueado</h1>
      )}
      </div>
  );
}

