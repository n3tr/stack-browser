import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import QuestionListItemTags from './QuestionListItemTags'

class QuestionListItem extends React.Component {

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

      </div>
    )
  }
}

export default QuestionListItem;
