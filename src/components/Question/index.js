import React, { Fragment, useState } from 'react'

function Question (props) {
  const [ answer, setAnswer ] = useState(null)

  const handleChooseAnswer = (index) => {
    if (answer) return
    setAnswer(props['options'][index])
  }

  const handleNextQuestion = () => {
    let isCorrect = props.correct_answer === answer
    if (isCorrect) props.handleScore()
    props.nextQuestion()
    setAnswer(null)
  }

  const displayResult = () => {
    let isCorrect = props.correct_answer === answer
    return (
      answer &&
      <div className='text-center'>
        <h1>{isCorrect ? 'Correct!' : 'Sorry!'}</h1>
        <button id="nextQuestion" className='btn' onClick={handleNextQuestion}>Next Question</button>
      </div>
    )
  }
  return (
    <Fragment>
      <p>{decodeURIComponent(props.question)}</p>
      {props.options &&
        <Fragment>
          <div className='buttonBox'>
            {props['options'].map((opt, idx) => (
              <div className='btnContainer' key={idx}>
                <button className={'btn ' + (answer && answer === opt ? 'selected' : '')} onClick={() => handleChooseAnswer(idx)}>
                  {decodeURIComponent(opt)}
                </button>
              </div>
            ))}
          </div>
        </Fragment>
      }
      { displayResult() }
    </Fragment>
  )
}
export default Question
