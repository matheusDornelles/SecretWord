import "./Game.css";

const game = ({ 
   verifyLetter,
   pickedWord,
   pickedCategory, 
   pickWordAndCategory, 
   letters, 
   guessedLetters, 
   wrongLetters, 
   guesses, 
   score }) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score} </span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar a letra da palavra</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLetterContainer"></div>
      <p>Letras já utilizadas</p>
      {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      <span>a, </span>
      <span>b, </span>
    </div>
  )
}

export default game