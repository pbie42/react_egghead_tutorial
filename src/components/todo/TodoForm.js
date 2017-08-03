import React from 'react'
import { string, func } from 'prop-types'

export const TodoForm = (props) => (
   <form onSubmit={ props.handleSubmit }>
      <input type="text" onChange={ props.handleInputChange } value={ props.currentTodo }/>
   </form>
)

TodoForm.propTypes = {
   currentTodo: string.isRequired,
   handleInputChange: func.isRequired,
   handleSubmit: func.isRequired
}