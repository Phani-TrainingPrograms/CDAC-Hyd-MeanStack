import React, { useRef } from 'react'
import { ContactService } from '../Services/contactsService'
import { useNavigate } from 'react-router-dom'


export default function AddContact() {
  //inputs taken from the inputboxes: fullname, emailaddress, phoneno and image,
  const refName = useRef(null)
  const refEmail = useRef(null)
  const refPhone = useRef(null)
  const refImage = useRef(null)
  
  let navigate = useNavigate()
  const handleSubmit = async (ev)=>{
    ev.preventDefault();
    //create the contact object. 
    const contact = {
      fullname : refName.current.value,
      emailaddress : refEmail.current.value,
      phoneno : refPhone.current.value,
      image : refImage.current.value
    };
    const returnData = await ContactService.addContact(contact)
    alert(JSON.stringify(returnData.data))
    navigate('/')
  }

  return(
    <>
      <h1 className='h1'>Add New Contact</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control m-3" placeholder='Name Please!' ref={refName} />
        <input type="text" className="form-control m-3" placeholder='Email Address!' ref={refEmail} />
        <input type="text" className="form-control m-3" placeholder='Phone no!' ref={refPhone}/>
        <input type="text" className="form-control m-3" placeholder='Image file!' ref={refImage}/>
        <button type="submit" className="btn btn-danger m-3 p-3">Add Contact</button>
      </form>
    </>
  )

}
