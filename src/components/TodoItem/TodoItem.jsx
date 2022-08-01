import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { removeTodo, toggleTodoCompleted } from 'store/todoSlice'
import styles from "../App/App.module.css"

export const TodoItem = ({ id, completed, text }) => {
  const dispatch = useDispatch();
  
  return (
    <li>
         <input 
              type="checkbox" 
              checked={completed}
              onChange={() => dispatch(toggleTodoCompleted({id}))}
            />
            <span>{text}</span>
            <span 
                className={styles.delete} 
                onClick={() => dispatch(removeTodo({id}))}
            >
                &times;
            </span>
    </li>
  )
}
