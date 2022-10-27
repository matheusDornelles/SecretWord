import "./Game.css";

const game = ({verifyLetter}) => {
  return (
    <div>
      <h2>verifyLetter</h2>
      <button onClick={verifyLetter}>Começar</button>
    </div>
  )
}

export default game