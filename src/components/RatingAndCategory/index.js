import React, { Fragment } from 'react'

const ratingLevels = {
  'hard': { select: 3, nonSelect: 2 },
  'medium': { select: 2, nonSelect: 3 },
  'easy': { select: 1, nonSelect: 4 }
}

function RatingAndCategory (props) {
  const createRating = (difficulty) => {
    if (difficulty) {
      let ratings = []
      let selectedRating = ratingLevels[difficulty]
      for (let i = 0; i < 5; i++) {
        if (i < selectedRating.select) {
          ratings.push(<i className='fa fa-star' key={i} />)
        } else {
          ratings.push(<i className='fa fa-star ratingDisable' key={i} />)
        }
      }
      return ratings
    }
  }

  return (
    <Fragment>
      <h1>Question {props.currentQueNumber + 1} of {props.totalCount}</h1>
      <p>{decodeURIComponent(props.category) }</p>
      {
        createRating(props.difficulty)
      }
    </Fragment>
  )
}
export default RatingAndCategory
