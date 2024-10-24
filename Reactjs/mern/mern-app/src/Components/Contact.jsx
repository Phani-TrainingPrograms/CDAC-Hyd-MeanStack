import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../assets/images/pic1.png'
import ImageComponent from './ImageComponent';
import Navigation from './Navigation';
export default function Contact(props) {
    const details = props.info;
    const [state, setState] = useState({
        contact : props.info
    })


    const onUpdateInput = (ev)=>{
        setState({ ...state, contact:{
            ...state.contact, [ev.target.name] : ev.target.value
        }})
    }
    return (
        <div>
            <pre>{JSON.stringify(state.contact)}</pre>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <ImageComponent image={details.image}/>
                        </div>
                        <div className="col-md-5 m-2">
                            <input type='text' name="id" className='form-control' value={details.id} onChange={onUpdateInput} />
                            <input type='text' name="fullname" className='form-control' value={details.fullname} onChange={onUpdateInput}  />
                            <input type='text' name="emailaddress" className='form-control' value={details.emailaddress} onChange={onUpdateInput} />
                            <input type='text' name ="phoneno" className='form-control' value={details.phoneno} onChange={onUpdateInput} />
                        </div>
                        <div className="col-md-2">
                            <Navigation id={details.id}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
