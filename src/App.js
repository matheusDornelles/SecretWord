import logo from './logo.svg';
import './App.css';

//imports
//css
import './App.css'; 
//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';
//React
import {useState, useCallback, useEffect} from "react";
//Data
import { wordsList } from "./data/words";  
import { set } from 'express/lib/application';
import { workerData } from 'worker_threads';

const stages = [

  {id:1, name:"start"},
  {id:2, name:"game" },
  {id:3, name:"end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState ("");
  const [pickedCategory, setPickedCategory] = useState ("");
  const [letters, setLetters ] = useState ([]);

  const pickWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category);

    //pick a random word
    
  }
  //starts the game
  const startGame = () => {

    pickWordAndCategory();


    setGameStage(stages[1].name);
  }
  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }
  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame = {startGame} />}
      {gameStage === "game" && <Game verifyLetter = {verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
