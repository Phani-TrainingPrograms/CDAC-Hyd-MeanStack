import './App.css'
import Food from './Food'
import Footer from './Footer'
import Header from './Header'
import Lists from './Lists'
import Profile from './Profile'
import UserInfo from './UserInfo'
function App() {

  return (
    <>
      <Header/>
      {/* <Food/>
      <Profile/>
      <UserInfo name="Phaniraj" age = {47} isStudent ={true}/>
      <UserInfo name="Robert Henry" isStudent={false}/>
      <UserInfo age={45}/>
      <UserInfo/>
      <UserInfo/> */}
      <Lists/>
      <Footer/>
    </>
  )
}

export default App
