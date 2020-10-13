import React, { useState, useEffect, Fragment } from 'react'
import { calculatePercent } from '../helpers/index'

function ScoreBar (props) {
  const [ currentScorePercent, setCurrentScorePercent ] = useState(0)
  const [ allRemWrongPercent, setAllRemWrongPercent ] = useState(0)
  const [ allRemCorrectPercent, setAllRemCorrectPercent ] = useState(0)
  const [ expect, setExpect ] = useState(0)
  useEffect(() => {
    let correct = calculatePercent(props.score, props.totalCount)
    let allRemWrong = calculatePercent(props.score, props.currentQueNumber)
    let allRemCorrect = calculatePercent((props.totalCount - props.currentQueNumber + props.score), props.totalCount)

    setCurrentScorePercent(correct)
    setAllRemCorrectPercent(allRemCorrect - allRemWrong)
    setExpect(allRemCorrect)
    setAllRemWrongPercent(allRemWrong - correct)
  }, [
    props.score,
    props.totalCount,
    props.currentQueNumber
  ])

  return (
    <Fragment>
      <div className='percentBar'>
        <div className='currentScorePercent'>Score:{ currentScorePercent }%</div>
        <div className='maxScorePercent'>Max:{ expect }%</div>
      </div>
      <div className='scoreBox'>
        <div className='allWrongBar' style={{ width: `${allRemWrongPercent}%` }} />
        <div className='currentScoreBar' style={{ width: `${currentScorePercent}%` }} />
        <div className='allCorrectBar' style={{ width: `${allRemCorrectPercent}%` }} />
      </div>
    </Fragment>
  )
}
export default ScoreBar
