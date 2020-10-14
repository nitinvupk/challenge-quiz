import React from 'react'

function QuestionLoadingBar (props) {
  let width = 0
  if (props.questionNumber && props.totalCount) {
    width = props.questionNumber / props.totalCount * 100
  }

  return (
    <div className='loadingBar'>
      <div className='progress' style={{ width: `${width}%` }} />
    </div>
  )
}
export default QuestionLoadingBar
