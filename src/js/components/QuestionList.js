import React, { PropTypes } from 'react'
import QuestionListItem from './QuestionListItem'

class QuestionList extends React.Component {

  render () {

    let questionsWithFav = this.mapQuestionWithFavorite()

    return (
      <div className="question-list">
        {
          questionsWithFav.map((question) => {
            return (
              <QuestionListItem
                question={question}
                key={question.question_id} />
            )
          })
        }
      </div>
    )
  }

  mapQuestionWithFavorite() {
    let favs = this.props.favorites || []

    // Get list of favorite ids -> [1, 2, 3, 4]
    let favId = favs.map( f => f.question_id)

    let questionWithFavStatus = this.props.questions.map( (q) => {
      console.log(favId);
      return Object.assign({}, q, {
        favorited: favId.indexOf(q.question_id) > -1
      })
    })

    return questionWithFavStatus
  }
}

export default QuestionList;
