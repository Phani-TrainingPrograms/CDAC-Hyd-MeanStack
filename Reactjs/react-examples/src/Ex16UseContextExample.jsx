/**
 * useContext(): It is a react Hook that allows to share data among the multiple levels of components within the React app without passing props thru each level. 
 * React does not allow data sharing among siblings of the components. It will be hirearchial. 
 * If any data is to be shared from the parent component to any of the children at any level, U should send them to the levels across the layers. 
 * This way of sending data thru props at various levels is called as Props Drilling.
 * 
 * PROVIDER COMPONENT: The one which has the data originally
 * 1. import { createContext } from 'react'
 * 2. export const MyContext = createContext()
 * 3. <MyContext.Provider value={user}>
 *      <ComponentB/>
 *    </MyContext.Provider>

 * CONSUMER COMPONENT:
 * 1. import { useContext } from 'react'
 * 2. import { MyContext} from '/ProviderComponent'
 * 3. const value = useContext(MyContext) 
 */

import React from 'react'
import ComponentA from './ComponentA'

export default function Ex16UseContextExample() {
  return (
    <div>
      <ComponentA/>
    </div>
  )
}
