import React, { PropTypes } from 'react'
import TagStore from '../../stores/TagStore'
import TagListItem from './TagListItem'

class TagList extends React.Component {
  componentDidMount() {
    this.storeToken = TagStore.addListener(this.onStoreUpdate.bind(this))
  }

  componentWillUnmount() {
    this.storeToken.remove()
  }

  onStoreUpdate() {
    this.forceUpdate()
  }

  render () {
    let { tags } = TagStore.getState()
    return (
      <div className="list-group">
        {
          tags.map((tag) => {
            return <TagListItem tag={tag} key={tag}/>
          })
        }
      </div>
    )
  }
}

export default TagList;
