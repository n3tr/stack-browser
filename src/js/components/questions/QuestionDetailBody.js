import React, { PropTypes } from 'react'

class QuestionDetailBody extends React.Component {
  render () {
    return (
      <div className="question-detail--body">
        <div dangerouslySetInnerHTML={
          {__html: this.props.question.body }
        } />
      </div>
    )
  }
}

export default QuestionDetailBody;
