import { useState } from "react";
import { TodoList } from "components/TodoList/TodoList";
import { InputField } from "components/InputField/InputField";
import styles from "./App.module.css";

export const App = () => {
  const [ todos, setTodos ] = useState([]);
  const [ text, setText ] = useState("");

  const addTodo = () => {
    if(text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString,
          text,
          completed: false
        }
      ])
      setText("")
    }
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const toggleTodoCompleted = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if(todo.id !== todoId) return todo;

          return {
            ...todo,
            completed: !todo.completed
          }
        }
      )
    )
  }

  return (
    <div
      className={styles.App}
    >
      <InputField 
        text={text}
        handleInput={setText}
        handleSubmit={addTodo}
      />

      <TodoList 
        todos={todos}
        toggleTodoCompleted={toggleTodoCompleted}
        removeTodo={removeTodo}        
      />
    </div>
  );
};
