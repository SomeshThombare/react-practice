import UserContextProvider from '../context/UserContextProvider'
import Profile from './Profile'
import Login from './Login'

function LoginProfile() {
  return (
<>
    <UserContextProvider>
        <Login/>
        <Profile/>
    </UserContextProvider>
</>
  )
}

export default LoginProfile
