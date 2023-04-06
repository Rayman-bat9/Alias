import React, { useEffect, useState } from 'react';
import { getPadTime } from '../helpers/getPadTime';
import MyButton from '../UI/MyButton';

function Game() {
  const words = ['градусник', 'лейка', 'кактус', 'пельмени', 'момент', 'император', 'ромашка', 'плотник', 'очередь', 'штанга', 'сачок', 'фартук', 'лобстер', 'природа', 'дятел', 'солод'];
  const [randomWord, setRandomWord] = useState('');
  const [availableWords, setAvailableWords] = useState(words);
  const [correctScore, setCorrectScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1 * 60);
  const [isCounting, setIsCounting] = useState(false);
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCounting) {
        setTimeLeft(() => (timeLeft >= 1 ? timeLeft - 1 : 0));
      }
    }, 1000);
    if (timeLeft === 0) setIsCounting(false);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isCounting]);

  const nextWord = () => {
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    setRandomWord(availableWords[randomIndex]);
    availableWords.splice(randomIndex, 1);
    setAvailableWords(availableWords);
    if (availableWords.length === 0) {
    /* eslint-disable-next-line */
      alert('Game over!'); 
      setIsCounting(false);
      setAvailableWords(words);
      setTimeLeft(1 * 60);
    }
  };

  const handleStart = () => {
    setIsCounting(true);
    nextWord();
  };

  const correctScorePlus = () => {
    setCorrectScore(correctScore + 1);
    nextWord();
  };

  const scorePlus = () => {
    setCorrectScore(correctScore + 1);
  };

  const scoreMinus = () => {
    if (correctScore !== 0) setCorrectScore(correctScore - 1);
  };

  return (
    <div className="timer">
      {isCounting
        ? (
          <div className="game-area">
            <div>
              <span>{minutes}</span>
              <span>:</span>
              <span>{seconds}</span>
            </div>
            <div className="words-area">
              <p>{randomWord}</p>
              <button className="correct-button" onClick={correctScorePlus}>✓</button>
            </div>
            <MyButton onClick={handleStart}>Next</MyButton>
          </div>
        )
        : (
          <div className="round-over-area">
            {isCounting && (
            <div>
              <p className="num-correct-p">Правельных ответов: </p>
              {correctScore}
              <button className="score-plus" onClick={scorePlus}>+</button>
              <button className="score-minus" onClick={scoreMinus}>-</button>
            </div>
            )}
            <MyButton onClick={handleStart}>Start</MyButton>
          </div>
        )}
    </div>
  );
}

export default Game;
