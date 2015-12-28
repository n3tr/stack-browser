import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import TagInput from '../tag/TagInput'
import TagList from '../tag/TagList'

class Sidebar extends React.Component {
  render () {
    return (
      <div>
        <TagInput />
        <TagList />
      </div>
    )
  }
}

export default Sidebar;
