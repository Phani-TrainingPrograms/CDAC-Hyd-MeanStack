import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import { Link, useParams } from 'react-router-dom'
import { ContactService } from '../Services/contactsService'
import Spinner from './Spinner'

export default function ViewContact() {
  //Extract the param from the URL
  const { id } = useParams()
  let [state, setState] = useState({
    loading : false,
    contact : {},
    errorMsg : ''
  })

  useEffect(()=>{
    async function getData(){
       setState({...state, loading : true})
       let response = await ContactService.getById(id);
       setState({...state, loading : false, contact : response.data}) 
    }
    getData();
  }, [id])
  //Make call to the API using axios and get the data based on the id. 
  let { loading, contact, errorMsg } = state;
  return (
    <div>
      {
        loading ? <Spinner/> : (
          <>
            <h2>View Contact Details</h2>
            <Contact info={contact}/>
            <Link to={'/'} className='btn btn-primary m-2'>
              <i className="fa fa-home" aria-hidden="true"></i>
              Back
            </Link>
          </>
        )
      }
    </div>
  )
}
