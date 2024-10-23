import React, { useState, createContext} from 'react'
import ComponentB from './ComponentB'

export const UserContext = createContext();

export default function ComponentA() {
    const [user, setUser] = useState("Phaniraj")
    return (
        <div className='box'>
            ComponentA
            <h2>{`Hello Mr. ${user}`}</h2>
            <UserContext.Provider value={user}>
                {/* <ComponentB user={user}/> */}
                <ComponentB/> 
                {/* //This guy is using context, so no props required.  */}
            </UserContext.Provider>
        </div>
  )
}
