import React, { PropTypes } from 'react'
import QuestionStore from '../../stores/QuestionStore'
import QuestionList from '../questions/QuestionList'

import { fetchQuestionsByTag } from '../../actions/QuestionAction'

class QuestionView extends React.Component {

  constructor(props) {
    super(props);
    this.state = QuestionStore.getState()
  }

  componentDidMount() {
    this.storeToken = QuestionStore.addListener(this.onStoreUpdate.bind(this));
    let { tag } = this.props.params;
    fetchQuestionsByTag(tag)
  }

  componentWillUnmount() {
    this.storeToken.remove();
  }

  componentWillReceiveProps(nextProps) {
    let { tag } = nextProps.params;
    fetchQuestionsByTag(tag)
  }

  onStoreUpdate() {
    this.setState(QuestionStore.getState())
  }

  render () {
    if (!this.state.questions){
      return <p>Loading...</p>
    }

    return (
      <div>
        <QuestionList questions={this.state.questions} />
      </div>
    )
  }
}

export default QuestionView;
