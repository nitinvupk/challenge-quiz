import React, { Fragment, useState, useEffect } from 'react'

function Question (props) {
  const [ answer, setAnswer ] = useState(null)
  const [ correct_answer, setCorrectAnswer ] = useState()

  useEffect(() => {
    if (!props.correct_answer) return

    setCorrectAnswer(correct_answer)
  }, [correct_answer])

  const handleChooseAnswer = (index) => {
    if (answer) return
    setAnswer(props['options'][index])
  }

  const displayResult = () => {
    let isCorrect = correct_answer === answer
    console.log("answer = ",answer)
    return (
      answer &&
      <div className='text-center'>
        <h1>{isCorrect ? 'Correct!' : 'Sorry!'}</h1>
        <button className='btn' onClick={props.nextQuestion}>Next Question</button>
      </div>
    )
}
  return (
    <Fragment>
      <p>{decodeURIComponent(props.question) }</p>
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
          <div className='buttonBox'>
            <button className={'btn ' + (answer && answer === props['options'][2] ? 'selected' : '')} onClick={() => handleChooseAnswer(2)}>
              {decodeURIComponent(props.options[2])}
            </button>
            <button className={'btn ' + (answer && answer === props['options'][3] ? 'selected' : '')} onClick={() => handleChooseAnswer(3)}>
              {decodeURIComponent(props.options[3])}
            </button>
          </div>
        </Fragment>
      }
      { displayResult() }
    </Fragment>
  )
}
export default Question
