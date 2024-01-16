
import './App.css'
import Login from '../components/Login'
import Profile from '../components/Profile'
import UserContextProvider from '../context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
    <h1>
      Ract Video for Context API with hitesh
      <Login />
      <Profile />
     
    </h1>
    </UserContextProvider>
  )

}

export default App
