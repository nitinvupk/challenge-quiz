import React, { useEffect } from 'react'
import questions from './questions.json'
import './App.css'

function App () {
  useEffect(() => {
    console.log(questions)
  }, [])

  return (
    <div className='container'>
      <div className='questionBox'>
        <h1>Question 16 of 20</h1>
        <p>Entertainment: Video Games</p>
        <i className='fa fa-star' />
        <i className='fa fa-star' />
        <i className='fa fa-star' />
        <i className='fa fa-star ratingDisable' />
        <i className='fa fa-star ratingDisable' />

        <p>At the start of a standard game of the Monopoly if you throw a double six which square would you land on </p>

        <div className='buttonBox'>
          <button className='btn'>Option 1</button>
          <button className='btn'>Option 2</button>
        </div>
        <div className='buttonBox'>
          <button className='btn selected'>Option 3</button>
          <button className='btn disable'>Option 4</button>
        </div>

        <div className='text-center'>
          <h1>Correct!</h1>
          <button className='btn'>Next Question</button>
        </div>
      </div>
    </div>
  )
}

export default App
