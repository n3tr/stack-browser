import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import QuestionListItemTags from './QuestionListItemTags'
import FavoriteButton from './FavoriteButton'
import { addFavorite, removeFavorite } from '../../actions/QuestionAction'

class QuestionListItem extends React.Component {
  onClickFavorite() {
    if (this.props.question.favorited){
      removeFavorite(this.props.question)
    }else{
      addFavorite(this.props.question)
    }

  }
  render () {
    let { title, question_id, answer_count, tags } = this.props.question;

    return (
      <div className="question-list-item">

        <div className="question-list-item--score">
          <span>{answer_count}</span>
        </div>

        <div className="question-list-item--info">
          <h3 className="question-list-item--title">
            <Link to={ "/questions/detail/" + question_id }>{title}</Link>
          </h3>
          <QuestionListItemTags tags={tags} />
        </div>

        <FavoriteButton
          onClickFavorite={this.onClickFavorite.bind(this)}
          isFavorited={this.props.question.favorited} />
      </div>
    )
  }
}

export default QuestionListItem;
