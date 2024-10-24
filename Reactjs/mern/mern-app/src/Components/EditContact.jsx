import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ContactService } from '../Services/contactsService'
import Contact from './Contact'

export default function EditContact() {
  let navigate = useNavigate();
  //Get the params
  let { id  } = useParams();
  let [state, setState] = useState({selected : {}})
  let { selected } = state;

  useEffect(()=>{
    async function getContact(){
      let response = await ContactService.getById(id)
      setState({selected : response.data})
    }
    getContact()
  },[id])

  //useeffect to get the record based on id
  //allow the user to update
  //onsubmit shall call the update function of the Contact server

  const onSave = async (ev) =>{
    ev.preventDefault()
    const response = await ContactService.updateContact(selected)
    alert(JSON.stringify(response.data))
  }
  //redirect to the listpage
  const data = {}
  return (
    <div className='container'>
      <Contact info={selected}/>
      <button className='btn btn-danger' onClick={onSave}>Save Changes</button>
    </div>
  )
}
