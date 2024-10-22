//useEffect is a React Hook that tells React to DO SOME CODE WORK WHEN(Any one of these):
//  The Component is rerendered
//  The Component is mounted. 
//  A state of a specific value is modified. 

//useEffect (functionToCall, [dependencies])
// #1 useEffect(() =>{}) ===Executed afer every rerendering. 
// #2 useEffect(()=>{}, []) ==> Executed only when it is mounted.
// #3 useEffect(()=>{}, [value]) ==> Executed when it is mounted + modification in the value.

//useEffect is used in the following scenarios:
// #1. Event Listeners
// #2. DOM Manipulations
// #3. Subscriptions
// #4. Fetching data from REST-API
// #5. Clean up of the components before unmounting. 

import React, { useState, useEffect} from 'react'

export default function Ex14UseEffectExample() {
//     const[count, setCount] = useState(0)
//     const[color , setColor] = useState("green")

//     useEffect(()=>{
//         document.title = `${count} Value in ${color} color`
//     }, [count, color]) 
    
//     function addCount(){
//         setCount(c => c + 1)
//     }

//     function subCount(){
//         setCount(c => c - 1)
//     }

//     function changeColor(){
//         setColor(c => c === "green" ? "red" : "green")
//     }
//   return (
//     <div>
//         <p style={{color : color}}>{count}</p>
//         <button onClick={addCount}>+</button>
//         <button onClick={subCount}>-</button>
//         <button onClick={changeColor}>Toggle Color</button>
//     </div>
//   )

    ////////////////////////Window Resizing App///////////////////////////////////////////////////
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(()=>{
        window.addEventListener("resize", handleResize)
        console.log("EVENT LISTENER ADDED")
    },[])

    useEffect(() => {
        document.title = `Size : ${width} x ${ height }`
       }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return (
        <>
            <p>Window Width: {width}</p>
            <p>Window Height: {height}</p>
        </>
    )
}
