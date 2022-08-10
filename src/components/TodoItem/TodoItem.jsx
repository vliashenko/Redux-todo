import React from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { deleteTodo, toggleStatus } from 'store/todoSlice'
import styles from "../App/App.module.css"

export const TodoItem = ({ id, completed, title }) => {
  const dispatch = useDispatch();
  
  return (
    <li>
         <input 
              type="checkbox" 
              checked={completed}
              onChange={() => dispatch(toggleStatus(id))}
            />
            <span>{title}</span>
            <span 
                className={styles.delete} 
                onClick={() => dispatch(deleteTodo(id))}
            >
                &times;
            </span>
    </li>
  )
}
