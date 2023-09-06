

import React, { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {
        console.log('formatting the guess - ', currentGuess)
    }

    const addNewGuess = () => {

    }

    const handleKeyUp = ({key}) => {
        if(key === 'Enter'){
            if(turn > 5){
                console.log('You have used up your guesses')
            }

            if( history.includes(currentGuess)){
                console.log("You have already given that word")
            }

            if(currentGuess.length !== 5){
                console.log("Word must be 5 character long")
                return 
            }
        }

        if(key === 'Backspace'){
            setCurrentGuess(prev => {return prev.slice(0, -1)})
            return
        }

        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess(prev => prev + key)
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyUp}
}

export default useWordle