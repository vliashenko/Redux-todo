import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addTodo } from "../../store/todoSlice";

import { InputField } from "components/InputField/InputField";
import { TodoList } from "components/TodoList/TodoList";
import styles from "./App.module.css";

export const App = () => {
  const [ text, setText ] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}))
    setText("")
  }

  return (
    <div
      className={styles.App}
    >
      <InputField 
        text={text}
        handleInput={setText}
        handleSubmit={addTask}
      />

      <TodoList/>
    </div>
  );
};
