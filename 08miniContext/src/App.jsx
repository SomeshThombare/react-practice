import UserContextProvider from './assets/context/UserContextProvider'
import './App.css'
import Profile from './assets/components/Profile'
import Login from './assets/components/Login'
function App() {


  return (
    <>
     <UserContextProvider>
      <h2>Welcpme to Context API</h2>
      <Login/>
      <Profile/>
     </UserContextProvider>
    </>
  )
}

export default App
