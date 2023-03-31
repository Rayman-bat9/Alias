import React, { useEffect, useState } from "react";
import { getPadTime } from "../helpers/getPadTime";
import MyButton from "../UI/MyButton";

const Timer = () => {
    const words = ["градусник", "лейка", "кактус", "пельмени", "момент", "император", "ромашка", "плотник", "очередь", "штанга", "сачок", "фартук", "лобстер", "природа", "дятел", "солод"];
    const [randomWord, setRandomWord] = useState('');
    const [availableWords, setAvailableWords] = useState(words);
    const [roundOver, setRoundOver] = useState(false);
    const [timeLeft, setTimeLeft] = useState(1 * 60);
    const [isCounting, setIsCounting] = useState(false);
    const minutes = getPadTime(Math.floor(timeLeft / 60));
    const seconds = getPadTime(timeLeft - minutes * 60);

    useEffect(() => {
        const interval  = setInterval(() => {
            isCounting &&
                setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0 ));
        }, 1000);
        if (timeLeft === 0) setIsCounting(false);
        return() => {
            clearInterval(interval);
        };
    }, [timeLeft, isCounting])

    const nextWord = () => {
        const randomIndex = Math.floor(Math.random() * availableWords.length);
        setRandomWord(availableWords[randomIndex]);
        availableWords.splice(randomIndex,1);
        setAvailableWords(availableWords);
        if (availableWords.length === 0) {
            alert('Game over!');
            setIsCounting(false);
            setRoundOver(true);
            setAvailableWords(words);
            setTimeLeft(1*60);
        }
    };
        
    const handleStart = () => {
        setIsCounting(true);
        nextWord();
    };

    return (
        <div className="timer">
            <div>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>
            {isCounting ? 
            <div className="words-area">
                <p>{randomWord}</p>
                <MyButton onClick={handleStart}>Next</MyButton>
            </div>:
            <MyButton onClick={handleStart}>Start</MyButton>
            }
        </div>
    )
}

export default Timer;