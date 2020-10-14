import React, { Fragment, useState, useEffect } from 'react'
import { calculatePercent, shuffle } from './helpers/index'
import allQuestions from './assets/questions.json'
import { RatingAndCategory, Question, ScoreBar, QuestionLoadingBar } from './components'
import './assets/css/App.css'

function App () {
  const [ questions, setQuestions ] = useState([])
  const [ selectedQuestion, setSelectedQuestion ] = useState({})
  const [ currentQueNumber, setCurrentQueNumber ] = useState(0)
  const [ finished, setFinished ] = useState(false)
  const [ score, setScore ] = useState(0)

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
    let arrAns = []
    arrAns = selectedQuestion.incorrect_answers
    arrAns.push(selectedQuestion.correct_answer)
    arrAns = shuffle(arrAns)
    selectedQuestion['options'] = arrAns
    setSelectedQuestion(selectedQuestion)
  }

  const handleNextQuestion = () => {
    let nextNumber = currentQueNumber + 1
    if (nextNumber < questions.length) {
      setCurrentQueNumber(nextNumber)
    } else {
      setFinished(true)
    }
  }

  const handleScore = () => {
    setScore(score + 1)
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
    nextQuestion: handleNextQuestion,
    handleScore
  }

  let scoreProps = {
    score,
    currentQueNumber,
    totalCount: questions.length
  }

  let loadingBarProps = {
    questionNumber: currentQueNumber + 1,
    totalCount: questions.length
  }

  return (
    <div className='container'>
      <QuestionLoadingBar {...loadingBarProps} />
      <div className='questionBox'>
        {!finished &&
          <Fragment>
            <RatingAndCategory {...ratingProps} />
            <Question {...questionProps} />
            <ScoreBar {...scoreProps} />
          </Fragment>
        }
        {finished &&
          <Fragment>
            <h1>Your Score: { calculatePercent(score, questions.length) }%</h1>
            <h1>Test Completed!</h1>
          </Fragment>
        }
      </div>
    </div>
  )
}

export default App
