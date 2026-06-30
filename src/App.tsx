
import { useState } from "react"
import LoginForm from "./LoginForm"



function App() {
const [myVar, setMyVar]= useState('WORLD')

function validateLogin() {
  setMyVar('TEST')
}

  return (
    <>
    <div className="App">
      <LoginForm />
    </div>
    Hello {myVar}
    <button className="button" onClick={validateLogin}>
      CLick
    </button>
    </>
  )
}

export default App