import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import { ContactService } from '../Services/contactsService'
import Spinner from './Spinner'

export default function ContactList() {
    let [state, setState] = useState({
        loading : false,
        contacts : [],
        errorMessage : ''
    })

    useEffect(()=>{
        //should call the Contact service and get the data and set it into the state object. 
        async function fetchData(){
            try {
                setState({...state, loading : true})   
                const response = await ContactService.getAllContacts()
                setState({...state, loading : false, contacts : response.data})                   
            } catch (error) {
                setState({...state, loading : false, errorMessage : JSON.stringify(error)})
            }
        }
        fetchData()
    }, [])
  let { loading, contacts, errorMessage  } = state;
  return (
    <div className='container'>
        <h1>Contact Manager</h1>
            {/* <pre>{JSON.stringify(contacts)}</pre> */}
            <div className="row">
                {
                    loading ? <Spinner/> : 
                    contacts.map(c => {
                        return (<div className='col-md-5 m-2' key={c.id}>
                                    <Contact info = {c}/>
                                </div>)
                    })
                }
            </div>
        </div>
  )
}
