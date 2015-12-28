import React, { PropTypes } from 'react'
import QuestionStore from '../stores/QuestionStore'
import FavoriteStore from '../stores/FavoriteStore'
import QuestionList from './QuestionList'

import { fetchQuestionsByTag } from '../actions/QuestionAction'

class QuestionView extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign(
      {},
      QuestionStore.getState(),
      FavoriteStore.getState()
    )
  }

  componentDidMount() {
    this.storeToken = QuestionStore.addListener(this.onStoreUpdate.bind(this));
    this.favoriteToken = FavoriteStore.addListener(this.onStoreUpdate.bind(this));
    let { tag } = this.props.params;
    fetchQuestionsByTag(tag)
  }

  componentWillUnmount() {
    this.storeToken.remove();
    this.favoriteToken.remove();
  }

  componentWillReceiveProps(nextProps) {
    let { tag } = nextProps.params;
    fetchQuestionsByTag(tag)
  }

  onStoreUpdate() {
    let state = Object.assign(
      {},
      QuestionStore.getState(),
      FavoriteStore.getState()
    )
    this.setState(state)

  }

  render () {
    if (!this.state.questions){
      return <p>Loading...</p>
    }

    return (
      <div>
        <QuestionList
          questions={this.state.questions}
          favorites={this.state.favorites}/>
      </div>
    )
  }
}

export default QuestionView;
