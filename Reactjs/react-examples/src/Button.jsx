export default function Button(){
    let count = 0
    const handle_click = () => {
        if(count < 5)   {
            alert(`OUCH!!! Count: ${count}`)
        }
        count = count + 1
    }
    const handle_argClick = (name) => alert(`${name} has clicked!!!`)
    return (
        // <button onClick={handle_click}>Click Me</button>
        <div>
            <button onClick={handle_click}>Click Me!!!</button> 
        </div>
    )
}