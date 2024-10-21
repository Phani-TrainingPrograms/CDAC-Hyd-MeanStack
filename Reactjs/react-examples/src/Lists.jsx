//This example explains the usage of lists in React Apps. 


export default function Lists() {
    const fruits = [
                        { id : 1, name: "Apples", price: 200}, 
                        { id : 2, name : "Mangoes", price : 300}, 
                        { id : 3, name : "Oranges", price: 60}, 
                        { id : 4, name :"Bananas", price : 75}, 
                        { id : 5, name : "Pine Apples", price : 50}
                    ]

                    //filtering, sorting on multiple conditions. 
    const listItems = fruits.map((fr) => <li key={fr.id}>{fr.name} : ₹. {fr.price}</li>)
    return (
        <div>
            <h1>List of Fruits with Us</h1>
            <ul>{listItems}</ul>
            {/* <ul>
                <li>{fruits[0]}</li>
                <li>{fruits[1]}</li>
                <li>{fruits[2]}</li>
                <li>{fruits[3]}</li>
                <li>{fruits[4]}</li>
            </ul> */}
        </div>
    )
}
