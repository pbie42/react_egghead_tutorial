import React from 'react'
import { string, bool, number } from 'prop-types'
import { partial } from '../../lib/utils'

export const TodoItem = (props) => {
   const handleToggle = partial(props.handleToggle, props.id)
   const handleRemove = partial(props.handleRemove, props.id)
   return (// eslint-disable-next-line
      <li><span className="delete-item"><a href="#" onClick={ handleRemove }>x</a></span>
         <input type="checkbox" onChange={ handleToggle } checked={ props.isComplete }/>{ props.name }
      </li>
   )
}

TodoItem.propTypes = {
   name: string.isRequired,
   isComplete: bool,
   id: number.isRequired
}