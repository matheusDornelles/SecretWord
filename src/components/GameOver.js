import "./GameOver.css"

const gameover = ({retry}) => {
  return (
    <div>
      <h1>Quero seu cuzinho</h1>
        <button onClick={retry}>Resetar Jogo</button>
    </div>
  )
}

export default gameover