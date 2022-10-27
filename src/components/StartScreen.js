import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className ="start">
        <h1>Secret Word</h1>
        <p>clique no botão abaixo para jogar</p>
        <button onClick={startGame}>Começar</button>
    </div>
  ) 
}

export default StartScreen