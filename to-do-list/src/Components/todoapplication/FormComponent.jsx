import React, { useState } from "react";
import styles from "./form.module.css";

const FormComponent = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={submitHandler}>
        <div className={styles.container}>
          <input
            className={styles.inputform}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="Enter your task"
          />
          <button className={styles.modrenbutton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
