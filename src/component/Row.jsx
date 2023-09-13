const Row = ({guess, currentguess}) => {
 
  if(guess){
    return(
      <div className='row past'>
        {guess.map((l, i) => (
          <div key={i} className={l.colour}>{l.key}</div>
        ))}
      </div>
    )
  }

  if(currentguess){
    let letters = currentguess.split('')

    return(
      <div className='row current'>
        {letters.map((letter, i) => (
          <div key={i} className='filled'>{letter}</div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i}></div>
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

