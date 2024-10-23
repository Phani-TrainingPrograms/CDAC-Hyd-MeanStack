import React, { useContext} from 'react'
import { UserContext } from './ComponentA'

export default function ComponentD() {
  const user = useContext(UserContext)
  return (
    <div className='box'>
        <h2>{`Bye Mr. ${user}`}</h2>
        ComponentD
    </div>
  )
}
