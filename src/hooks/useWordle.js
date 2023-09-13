

import React, { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    const formatGuess = () => {
        let solutionArr = [...solution]
        let formatguess = [...currentGuess].map((l) => {
            return {key: l, colour: 'grey'}
        })

        formatguess.forEach((obj, idx) => {
            if(solutionArr[idx] === obj.key){
                obj.colour = 'green'
                solutionArr[idx] = null
            } 
        })

        formatguess.forEach((obj, idx) => {
            if(solutionArr.includes(obj.key) && obj.colour !== 'green'){
                formatguess[idx].colour = 'yellow'
                solutionArr[solutionArr.indexOf(obj.key)] = null
            }
        })      

        return formatguess
    }

    const addNewGuess = (formattedguess) => {
        if(currentGuess === solution){
            setIsCorrect(true)
        }

        setGuesses((prevGuess) => {
            let newGuesses = [...prevGuess]
            newGuesses[turn] = formattedguess
            return newGuesses
        })

        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })

        setTurn((prevTurn) => {
            return prevTurn + 1
        })

        setCurrentGuess('')
    }

    const handleKeyUp = ({key}) => {
        if(key === 'Enter'){
            if(turn > 5){
                console.log('You have used up your guesses')
                return
            }

            if( history.includes(currentGuess)){
                console.log("You have already given that word")
            }

            if(currentGuess.length !== 5){
                console.log("Word must be 5 character long")
                return 
            }

            const formatted = formatGuess()
            addNewGuess(formatted)
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