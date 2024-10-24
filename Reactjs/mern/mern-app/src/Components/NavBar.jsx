import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <div className="container">
          <Link to={'/'} className='navbar-brand'>
            <i className="fa fa-mobile-phone" aria-hidden="true">
            </i>
            <span className='text-warning'>List Contacts</span>
          </Link>
          <Link to={'/contacts/add'} className='btn btn-warning text-dark'>
            <i className="fa fa-plus-circle" aria-hidden="true">
            </i>
            <span className='text-danger'>Add new Contact</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
