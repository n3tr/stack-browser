import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const TagListItem = ({tag}) => {
  return (
    <Link to={"/questions/tag/" + tag} className="list-group-item">{tag}</Link>
  )
}

export default TagListItem
