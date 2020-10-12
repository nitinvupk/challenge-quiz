import React, { Fragment, useState, useEffect } from 'react'
import { shuffle } from './helpers/index'
import allQuestions from './questions.json'
import RatingAndCategory from './components/RatingAndCategory'
import Question from './components/Question'
import './App.css'

function App () {
  const [ questions, setQuestions ] = useState([])
  const [ selectedQuestion, setSelectedQuestion ] = useState({})
  const [ currentQueNumber, setCurrentQueNumber ] = useState(0)
  const [ finished, setFinished ] = useState(false)

  useEffect(() => {
    setQuestions(allQuestions)
  }, [])

  useEffect(() => {
    if (questions.length) {
      handleSelectQuestion()
    }
  }, [questions, currentQueNumber])

  const handleSelectQuestion = () => {
    let selectedQuestion = questions[currentQueNumber]
    if (Object.keys(selectedQuestion).length) {
      let arrAns = []
      arrAns = selectedQuestion.incorrect_answers
      arrAns.push(selectedQuestion.correct_answer)
      arrAns = shuffle(arrAns)
      console.log(arrAns)
      selectedQuestion['options'] = arrAns
      setSelectedQuestion(selectedQuestion)
    }
  }

  const handleNextQuestion = () => {
    let nextNumber = currentQueNumber + 1
    if (nextNumber < questions.length) {
      setCurrentQueNumber(nextNumber)
    } else {
      setFinished(true)
    }
  }

  let { category, difficulty, question, correct_answer, options } = selectedQuestion

  let ratingProps = {
    currentQueNumber,
    totalCount: questions.length,
    category,
    difficulty
  }

  let questionProps = {
    question,
    correct_answer,
    options,
    nextQuestion: handleNextQuestion
  }

  return (
    <div className='container'>
      <div className='questionBox'>
        {!finished &&
          <Fragment>
            <RatingAndCategory {...ratingProps} />
            <Question {...questionProps} />
          </Fragment>
        }
        {finished &&
          <h1>Test Completed!</h1>
        }
      </div>
    </div>
  )
}

export default App
