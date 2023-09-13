import React, { useEffect, useState } from 'react'

const Row = ({guess}) => {
 
  if(guess){
    return(
      <div className='row past'>
        {guess.map((l, i) => (
          <div  key={i} className={l.colour}>{l.key}</div>
        ))}
      </div>
    )
  }

  return (
    <div className='row'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Row

