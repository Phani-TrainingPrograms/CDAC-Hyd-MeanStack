import React from 'react'

export default function Spinner() {
const imgUrl = 'assets/images/loading.gif'
  return (
    <div>
        <img src={imgUrl} alt='Loading'/>
    </div>
  )
}
