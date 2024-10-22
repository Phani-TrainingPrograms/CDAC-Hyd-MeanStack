import React, { useState} from 'react'

export default function Ex11ArrayStateExample() {
    const [ foods, setFoods ] = useState(["Idly", "Poha", "Banana"])

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        setFoods([...foods, newFood])//Appending to UR current list. 
    }

    function handleRemoveFood(index){
        // setFoods(foods.filter((element, i) => i !== index))
        setFoods(foods.filter((_, i) => i !== index)) //_ is used to tell that the arg is ignored. 
    }
  return (
    <div>
        <h1>List of Food items</h1>
        <ul>
            {
                foods.map((f, i) => 
                    <li key={i} onClick={() => handleRemoveFood(i)}>{f}</li>
            )}    
        </ul>
        <input type='text' id="foodInput" placeholder='Enter the food to eat'/>
        <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}
