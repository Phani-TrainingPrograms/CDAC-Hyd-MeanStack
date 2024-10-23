/**
 * useRef hook = It means use references. Does not cause re-rendering of the components when its values change. When U want UR component to remember some info, but U dont want to trigger new rendering, then U can use this hook to maintain a state and the component shall not render again and again when the data gets modified. 
 * useState rerenders everytime the data is modified. 
 */
import React, { useRef, useEffect  } from 'react'

export default function Ex17UseRefExample() {
//     //let [ number, setNumber ] = useState(0)
//     const refNumber = useRef(0)
//     const refFood = useRef("Pizza")

//     const handleClick = () =>{
//         //setNumber(n => n + 1)
//         refNumber.current = refNumber.current + 1
//         console.log(refNumber.current);
//     }
//     useEffect(() => console.log("COMPONENT IS RENDERED"))
//   return (
//     <div>
//         <button onClick={handleClick}>Increment me!!!</button>
//         <p>{refFood.current}</p>
//     </div>
//  )
//////////////////Practical usage of useRef////////////////////////////////
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    function handleClick1(){
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick2(){
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor = "yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick3(){
        inputRef3.current.focus()
        inputRef3.current.style.backgroundColor = "yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef1.current.style.backgroundColor = ""
    }

    useEffect(() => console.log("COMPONENT IS LOADED"))

    return (
        <div>
            <p>
                <button onClick={handleClick1}>Click Me!</button>
                <input ref={inputRef1}/>
            </p>
            <p>
                <button onClick={handleClick2}>Click Me!</button>
                <input ref={inputRef2}/>
            </p>
            <p>
                <button onClick={handleClick3}>Click Me!</button>
                <input ref={inputRef3}/>
            </p>
        </div>
    )

}