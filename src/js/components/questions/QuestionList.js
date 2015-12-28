import React, { PropTypes } from 'react'
import QuestionListItem from './QuestionListItem'

class QuestionList extends React.Component {

  render () {

    let questionDoms = this.props.questions.map((question) => {
       return <QuestionListItem question={question} key={question.question_id} />
    })

    return (
      <div className="question-list">
        { questionDoms }
      </div>
    )
  }


}

export default QuestionList;
