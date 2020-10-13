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
        <button className='btn' onClick={handleNextQuestion}>Next Question</button>
      </div>
    )
}
  return (
    <Fragment>
      <p>{decodeURIComponent(props.question)}</p>
      {props.options &&
        <Fragment>
          <div className='buttonBox'>
            <button className={'btn ' + (answer && answer === props['options'][0] ? 'selected' : '')} onClick={() => handleChooseAnswer(0)}>
              {decodeURIComponent(props.options[0])}
            </button>
            <button className={'btn ' + (answer && answer === props['options'][1] ? 'selected' : '')} onClick={() => handleChooseAnswer(1)}>
              {decodeURIComponent(props.options[1])}
            </button>
          </div>
          {props['options'].length > 2 &&
            <div className='buttonBox'>
              <button className={'btn ' + (answer && answer === props['options'][2] ? 'selected' : '')} onClick={() => handleChooseAnswer(2)}>
                {decodeURIComponent(props.options[2])}
              </button>
              <button className={'btn ' + (answer && answer === props['options'][3] ? 'selected' : '')} onClick={() => handleChooseAnswer(3)}>
                {decodeURIComponent(props.options[3])}
              </button>
            </div>
          }
        </Fragment>
      }
      { displayResult() }
    </Fragment>
  )
}
export default Question
