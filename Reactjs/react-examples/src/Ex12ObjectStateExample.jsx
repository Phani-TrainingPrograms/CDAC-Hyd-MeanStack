import React, { useState} from 'react'

export default function Ex12ObjectStateExample() {
    const [ car, setCar] = useState({
        year : 2024, make : "Maruti", model : "Grand Vitara"        
    })

    function handleYearUpdate(ev){
        //setCar(c => ({year : 2024, make : "Maruti", model : "Grand Vitara", year : ev.target.value}))
        setCar(c => ({...c , year : ev.target.value}))
    }
    
  return (
    <div>
        <p>UR Fav Car is {car.year} { car.make} {car.model}</p>
        <input type='number' value={car.year} onChange={handleYearUpdate} placeholder='Year'/>
        <input type='text' value={car.make} placeholder='Make'/>
        <input type='text' value={car.model} placeholder='Model'/>
    </div>
  )
}
