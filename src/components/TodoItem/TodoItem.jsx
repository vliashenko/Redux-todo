import React from 'react'
import styles from "../App/App.module.css"

export const TodoItem = ({id, completed, text, toggleTodoCompleted, removeTodo}) => {
  return (
    <li>
         <input 
              type="checkbox" 
              checked={completed}
              onChange={() => toggleTodoCompleted(id)}
            />
            <span>{text}</span>
            <span 
                className={styles.delete} 
                onClick={() => removeTodo(id)}
            >
                &times;
            </span>
    </li>
  )
}
