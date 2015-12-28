import React, { PropTypes } from 'react'
import FavoriteStore from '../../stores/FavoriteStore'
import QuestionList from '../questions/QuestionList'

class FavoriteView extends React.Component {

  constructor(props) {
    super(props)
    this.state = Object.assign(
      {},
      FavoriteStore.getState()
    )
  }

  componentDidMount() {
    this.storeToken = FavoriteStore.addListener(this.onStoreUpdate.bind(this))
  }

  componentWillUnmount() {
    this.storeToken.remove()
  }

  onStoreUpdate() {
    this.setState(FavoriteStore.getState())
  }

  render () {
    return (
      <div className="col-xs-8 col-xs-offset-2">
        <QuestionList questions={this.state.favorites} favorites={this.state.favorites} />
      </div>
    )
  }
}

export default FavoriteView;
