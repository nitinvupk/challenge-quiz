import React, { useState, useEffect, Fragment } from 'react'
import { calculatePercent } from '../../helpers/index'

function ScoreBar (props) {
  const [ currentScorePercent, setCurrentScorePercent ] = useState(0)
  const [ lowestPossiblePercent, setLowestPossiblePercent ] = useState(0)
  const [ maximumPercent, setMaximumPercent ] = useState(0)
  const [ maxScore, setMaxScore ] = useState(0)
  useEffect(() => {
    let correct = calculatePercent(props.score, props.totalCount)
    let lowestPossible = calculatePercent(props.score, props.currentQueNumber)
    let maximum = calculatePercent((props.totalCount - props.currentQueNumber + props.score), props.totalCount)

    setCurrentScorePercent(correct)
    setMaximumPercent(maximum - lowestPossible)
    setMaxScore(maximum)
    setLowestPossiblePercent(lowestPossible - correct)
  }, [
    props.score,
    props.totalCount,
    props.currentQueNumber
  ])

  return (
    <Fragment>
      <div className='percentBar'>
        <div className='currentScorePercent'>Score:{ currentScorePercent }%</div>
        <div className='maxScorePercent'>Max:{ maxScore }%</div>
      </div>
      <div className='scoreBox'>
        <div className='lowestPossibleBar' style={{ width: `${lowestPossiblePercent}%` }} />
        <div className='currentScoreBar' style={{ width: `${currentScorePercent}%` }} />
        <div className='maximumPercentBar' style={{ width: `${maximumPercent}%` }} />
      </div>
    </Fragment>
  )
}
export default ScoreBar
