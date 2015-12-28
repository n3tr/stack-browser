import React, { PropTypes } from 'react'
import Header from './Header'

class Main extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <section>
          <div className="container">

              { this.props.children }

          </div>
        </section>
      </div>

    )
  }
}

export default Main;
