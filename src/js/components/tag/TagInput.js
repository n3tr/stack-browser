import React, { PropTypes } from 'react'

import { addTag } from '../../actions/TagAction'

class TagInput extends React.Component {

  onFormSubmit(e) {
    e.preventDefault();
    let tag = this.refs.tagInput.value;
    this.refs.tagInput.value = ""
    addTag(tag)
  }

  render () {
    return (
      <form className="form" onSubmit={this.onFormSubmit.bind(this)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add tag"
            ref="tagInput"/>
        </div>
      </form>
    )
  }
}

export default TagInput;
