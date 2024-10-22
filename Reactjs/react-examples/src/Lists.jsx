//This example explains the usage of lists in React Apps. 


export default function Lists(props) {
    // const fruits = [
    //                     { id : 1, name: "Apples", price: 200}, 
    //                     { id : 2, name : "Mangoes", price : 300}, 
    //                     { id : 3, name : "Oranges", price: 60}, 
    //                     { id : 4, name :"Bananas", price : 75}, 
    //                     { id : 5, name : "Pine Apples", price : 50}
    //                 ]
    //Try this code by using Props instead of having it in the component itself

    /**
     * Using Props for our User Interface
    */
    const cat = props.category
    const itemList = props.items

    //filter an array in the react application. 
    // const lowCostItems = itemList.filter(i => i.price <= 75)
    // const highCostItems = itemList.filter(i => i.price > 75)

    itemList.sort((f, s) => s.name.localeCompare(f.name))
    //itemList.sort((f, s) => f.price - s.price)


    //filtering, sorting on multiple conditions. 
    const listItems = itemList.map((i) => <li key={i.id}>{i.name} : ₹. {i.price}</li>)
    // const lowlistItems = lowCostItems.map((i) => <li key={i.id}>{i.name} : ₹. {i.price}</li>)
    // const highlistItems = highCostItems.map((i) => <li key={i.id}>{i.name} : ₹. {i.price}</li>)
    return (
        <div>
            <h1>Category: {cat}</h1>
            <div>
                <ul>{listItems}</ul>
            </div>

            {/* <div>
                <ul>{highlistItems}</ul>
            </div> */}
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
