import React, { PropTypes } from 'react'
import { questionById } from '../utils/stackApi'
import QuestionListItem from './QuestionListItem'
import QuestionDetailBody from './QuestionDetailBody'

class QuestionDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      question: null
    }
  }

  componentDidMount() {
    let { id } = this.props.params;
    questionById(id, (err, question) => {
      this.setState({ question: question });
    })
  }

  render () {
    if (!this.state.question) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <QuestionListItem question={this.state.question} />
        <QuestionDetailBody question={this.state.question} />
      </div>
    )
  }
}

export default QuestionDetail;
