import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../assets/images/pic1.png'
import ImageComponent from './ImageComponent';
export default function Contact(props) {
    const details = props.info;
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <ImageComponent image={details.image}/>
                        </div>
                        <div className="col-md-5 m-2">
                            <input type='text' className='form-control' value={details.id} />
                            <input type='text' className='form-control' value={details.fullname} />
                            <input type='text' className='form-control' value={details.emailaddress} />
                            <input type='text' className='form-control' value={details.phoneno} />
                        </div>
                        <div className="col-md-2">
                            <ul className='list-group' style={{ listStyleType: 'none' }}>
                                <li>
                                    <Link to={`/contacts/view/${details.id}`} className='btn btn-success m-2'>
                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/contacts/edit/${details.id}`} className='btn btn-warning m-2'>
                                        <i class="fa fa-pencil-square" aria-hidden="true"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/contacts/delete/${details.id}`} className='btn btn-danger m-2'>
                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
