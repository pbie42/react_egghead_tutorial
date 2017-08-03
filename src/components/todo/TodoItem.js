import React from 'react'
import { string, bool, number } from 'prop-types'

export const TodoItem = (props) => {
   return (
      <li>
         <input type="checkbox" defaultChecked={ props.isComplete }/>{ props.name }
      </li>
   )
}

TodoItem.propTypes = {
   name: string.isRequired,
   isComplete: bool,
   id: number.isRequired
}