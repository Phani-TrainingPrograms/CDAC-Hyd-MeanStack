import React from 'react'

export default function ImageComponent({image}) {
    const url = `src/assets/images/${image}`
  return (
    <div>
        <img src={url} alt='Pic'/>
    </div>
  )
}
