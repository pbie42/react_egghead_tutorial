import React from 'react'
import { TodoItem } from './TodoItem'
import { array } from 'prop-types'

export const TodoList = (props) => {
   return (
      <div className="Todo-List">
         <ul>
            { props.todos.map(todo => <TodoItem key={ todo.id } { ...todo }/>) }
         </ul>
      </div>
   )
}

TodoList.propTypes = {
   todos: array.isRequired
}