import { useState } from 'react';
import './App.css';
import data from "./data"

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [scrore, setScore] = useState(0);

  const handelOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(scrore + 1)
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const handelTryAgain = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0)
  }

  return (
    <div className='App'>
      {
        showScore ?
          <div className='scrore-section'>
            <h1>You scrored {scrore} out of {data.length}</h1>
            <button type='button' className="btn-tryagain" onClick={handelTryAgain}>Start Again</button>
          </div>
          :
          <>

            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1} </span> / {data.length}
              </div>
              <div className='question-text'>{data[currentQuestion].questionText}</div>
            </div>

            <div className='answer-section'>
              {
                data[currentQuestion].answerOption.map((answerOption,index) => (
                  <button key={index + 1} onClick={() => handelOptionClick(answerOption.isCorrect)}>{answerOption.anserText}</button>
                ))
              }
            </div>
          </>

      }
    </div>
  );
}

export default App;
