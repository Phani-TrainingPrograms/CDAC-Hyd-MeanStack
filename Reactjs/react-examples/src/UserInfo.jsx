import React from 'react'
import PropTypes from 'prop-types'

//Example for using Props: properties for UR component that is passed from the external components(parent components)
export default function UserInfo(props) {
  const name = props.name
  const age = props.age
  const isStudent = props.isStudent
    return (
    <div className='card'>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? "Yes" : "Not a Student"}</p>
    </div>
  )
}

UserInfo.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool
}

UserInfo.defaultProps = {
    name : "Guest", 
    age : 0,
    isStudent : true
}