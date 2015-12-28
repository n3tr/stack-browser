import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Sidebar from './Sidebar'

class QuestionBrowser extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-xs-3">
          <Sidebar />
        </div>

        <div className="col-xs-9">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default QuestionBrowser;
