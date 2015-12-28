import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class QuestionListItemTags extends React.Component {
  render () {
    return (
      <p>
        {
          this.props.tags.map((tag) => {
            return (
              <Link
                to={"/questions/tag/" + tag}
                key={tag}
                type="button"
                className="btn btn-default btn-xs">{tag}</Link>
            )
          })
        }
      </p>
    )
  }
}

export default QuestionListItemTags;
