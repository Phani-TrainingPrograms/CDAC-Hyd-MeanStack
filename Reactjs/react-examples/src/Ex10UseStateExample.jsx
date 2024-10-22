import React, {useState} from 'react' //react has many components, of which we want to use only useState. This feature is called as Object destructuring, used to extract specific component from a large library. 

//React Hooks: Sp Functions that allows Functional Components to use react features without writing old style Class Components which was available in older version of React(16.8)
//useState, useEffect, useContext, useReducer, useCallBack, useRef and many more. 

//useState : A React Hook that allows to create a stateful variable and a setter function to update the value in the Virtual DOM. 

//Updater functions A Function that is passed as arg to the setState function
//Allows for safe updates based on the Previous state. 
// Good practise to use updater functions instead of hard value modifications. 

export default function Ex10UseStateExample() {
    let [name, setName] = useState("Guest")
    let [ age, setAge ] =useState(47)
    let [isEmployed, setIsEmployed] = useState(true)

    function updateName(){
        setName("Phaniraj")
    }
    const incrementAge = () => {
        //Take the OLD STATE to calculate the new State.
        //React places UR udpater function inside a Queue 
        setAge((a) => a + 1)        
        setAge(a => a + 1)
        setAge(a => a + 1)
    }

    const toggleStatus = () => setIsEmployed(!isEmployed)
  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p> 
        <button onClick={incrementAge}>Increment Age</button>
        <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
        <button onClick={toggleStatus}>Toggle Employee Status</button>
    </div>
  )
}
