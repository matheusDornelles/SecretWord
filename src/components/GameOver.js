import "./GameOver.css"

const gameover = ({retry}) => {
  return (
    <div>
      <h1>Você Perdeu</h1>
        <button onClick={retry}>Resetar Jogo</button>
    </div>
  )
}

export default gameover