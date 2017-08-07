import React, { Component } from 'react'
import { string, func } from 'prop-types'

export class Link extends Component {
   static contextTypes = {
      route: string,
      linkHandler: func
   }
   handleClick = (evt) => {
      evt.preventDefault()
      this.context.linkHandler(this.props.to)
   }
   render() {
      const activeClass = this.context.route === this.props.to ? 'active' : ''
      // eslint-disable-next-line
      return <a href="#" className={ activeClass } onClick={ this.handleClick }>{ this.props.children }</a>
   }
}

Link.proptypes = {
   to: string.isRequired
}