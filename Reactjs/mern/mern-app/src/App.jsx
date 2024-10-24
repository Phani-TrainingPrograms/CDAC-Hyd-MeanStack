import { useState } from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './Components/ContactList'
import EditContact from './Components/EditContact'
import ViewContact from './Components/ViewContact'
import AddContact from './Components/AddContact'

function App() {
  return (
    <>
      <Routes>
          <Route path = {'/'} element ={ <Navigate to={'/contacts/list'}/>}/>
          <Route path = {'/contacts/list'} element ={ <ContactList/>  }/>
          <Route path = {'/contacts/edit/:id'} element ={ <EditContact/> }/>
          <Route path = {'/contacts/view/:id'} element ={ <ViewContact/> }/>
          <Route path = {'/contacts/add'} element ={ <AddContact/> }/>
      </Routes>
    </>
  )
}

export default App
