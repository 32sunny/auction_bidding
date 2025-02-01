import { useState } from 'react'

import './App.css'
import UserList from './Components/UserList'
import UserForm from './Components/UserForm'
import SignUp from './Authentication/Signup'
import Login from './Authentication/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <UserList/>
  <UserForm/>
  <SignUp/>
  <Login/>
    </>
  )
}

export default App
