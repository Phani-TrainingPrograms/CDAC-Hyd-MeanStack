import Button from './Button'
import Ex10UseStateExample from './Ex10UseStateExample'
import Ex11ArrayStateExample from './Ex11ArrayStateExample'
import Ex12ObjectStateExample from './Ex12ObjectStateExample'
import Food from './Food'
import Footer from './Footer'
import Header from './Header'
import Lists from './Lists'
import Profile from './Profile'
import UserInfo from './UserInfo'
function App() {
  //render one xml content. 
  const fruits = [
    { id : 1, name: "Apples", price: 200}, 
    { id : 2, name : "Mangoes", price : 300}, 
    { id : 3, name : "Oranges", price: 60}, 
    { id : 4, name :"Bananas", price : 75}, 
    { id : 5, name : "Pine Apples", price : 50}
  ]

  const vegetables = [
    { id : 6, name: "Carrots", price: 70}, 
    { id : 7, name : "Onions", price : 65}, 
    { id : 8, name : "Potatoes", price: 40}, 
    { id : 9, name :"Tomatoes", price : 80}, 
    { id : 10, name : "Sweet Corns", price : 150}
  ]

  return (
    <>
      <Header/>
      {/* <Food/>
      <Profile/>
      <UserInfo name="Phaniraj" age = {47} isStudent ={true}/>
      <UserInfo name="Robert Henry" isStudent={false}/>
      <UserInfo age={45}/>
      <UserInfo/>
      <UserInfo/> 
      <Lists items={fruits} category = "Fruits"/>
      <Lists items={vegetables} category = "Vegetables"/>

      {fruits.length > 0 ? <Lists items={fruits} category="Fruits"/> : <></>}
      {vegetables.length > 0 ? <Lists items={vegetables} category="Vegetables"/> : <></>}
      <Button/>

      <Ex10UseStateExample/>
      <Ex11ArrayStateExample/>*/}
      <Ex12ObjectStateExample/>
      <Footer/>
    </>
  )
}

export default App
