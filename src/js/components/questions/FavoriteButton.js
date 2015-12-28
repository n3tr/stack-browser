import React, { PropTypes } from 'react'
import classNames from 'classnames'

const FavoriteButton = ({onClickFavorite, isFavorited}) => {
  let linkClass = classNames('question-list-item--favorite', {favorited: isFavorited});
  return (
    <a
    className={ linkClass }
    onClick={
      e => {
        e.preventDefault()
        onClickFavorite()
      }
    } >
      <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
    </a>
  )
}

export default FavoriteButton
