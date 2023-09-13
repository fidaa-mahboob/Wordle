import React from 'react'
import Row from './Row'

const Grid = ({guesses, turn, currentguess}) => {
  return (
    <div>
        {
            guesses.map((g, i) => {
                if(turn === i){
                    return <Row key={i} currentguess={currentguess}/>
                }
                return <Row key={i} guess={g}/>
            })
        }
    </div>
  )
}

export default Grid