import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'

const Wordle = ({solution}) => {

  const {turn, guesses, isCorrect, currentGuess, handleKeyUp} = useWordle(solution)

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp)

    return () => window.removeEventListener("keyup", handleKeyUp)},
  [handleKeyUp])


  useEffect(() => {
    console.log(turn, guesses, isCorrect)
  }, [turn, guesses, isCorrect])
    

  return (
    <div>
        <div>Solution -- {solution}</div>
        <div>Current guess: {currentGuess}</div>
        <Grid turn={turn} guesses={guesses} currentguess={currentGuess}/>
    </div>
  )
}

export default Wordle