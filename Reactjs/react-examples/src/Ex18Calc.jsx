import React, { useState, useEffect } from 'react'
export default function Ex18Calc(){
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [operand, setOperand] = useState("Add")
    const [result, setResult] = useState(0)

    useEffect(() => console.log("COMPONENT IS RENDERED"))
    
    const getResult = (ev) =>{
        ev.preventDefault();
        switch (operand) {
            case "Add":
                setResult(parseFloat(first) + parseFloat(second))
                break;
            case "Subtract": 
                setResult(first - second); 
                break;
            case "Multiply":
                setResult(first * second)
                break;
            case "Divide":
                setResult(first / second);
                break;
            default:
                alert("Invalid Choice")
                break;
        }
    }
    return(
        <>
        <h1>Calc Program</h1>
        <div>
            Enter the First Value: 
            <input type='number' onChange={(e) => setFirst(e.target.value)}/>
        </div>
        <div>
            Enter the Second Value: 
            <input type='number' onChange={(e) => setSecond(e.target.value)}/>
        </div>
        <div>
            Select the Choice:
            <select onChange={(e) => setOperand(e.target.value)}>
                <option>Select any option</option>
                <option>Add</option>
                <option>Subtract</option>
                <option>Multiply</option>
                <option>Divide</option>
            </select>
        </div>
        <div>
            <button onClick={(e) => getResult(e)}>Get Result</button>
        </div>
        <p>Answer : {result}</p>
        </>
    )
}