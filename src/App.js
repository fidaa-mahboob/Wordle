import 'bootstrap/dist/css/bootstrap.css'
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Row from './component/Row'
import Check from './component/Check'
import Wordle from './component/Wordle';


function App() {

  const [solution, setSolution] = useState('money')

  return (
    <>
    <div className="App">
      <h1>Wordle (Lingo)</h1>
      {solution && <Wordle solution={solution}/>}
    </div>
    </>
  );
}

export default App;
