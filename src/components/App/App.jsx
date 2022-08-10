import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addNewTodo, fetchTodos } from "../../store/todoSlice";

import { InputField } from "components/InputField/InputField";
import { TodoList } from "components/TodoList/TodoList";
import styles from "./App.module.css";

export const App = () => {
  const [ text, setText ] = useState("");
  const { status, error } = useSelector(state => state.todos)
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addNewTodo(text))
    setText("")
  }

  useEffect(() => {
    dispatch(fetchTodos());
  },[dispatch])

  return (
    <div
      className={styles.App}
    >
      <InputField 
        text={text}
        handleInput={setText}
        handleSubmit={addTask}
      />

      {status === "pending" && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      {status === "resolved" && <TodoList/>}
      
    </div>
  );
};
