import React, { useEffect, useState } from 'react'
import './Row.css'
import Check from './Check'

const Row = () => {
  const [value, setValue] = useState('')

  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      setValue(e.target.value)
    })
  })

  return (
    <div className='letter-row'>
      <div className='letter-box'></div>
      <div className='letter-box'></div>
      <div className='letter-box'></div>
      <div className='letter-box'></div>
      <div className='letter-box'></div>
      <Check/> 
    </div>
  )
}

export default Row

