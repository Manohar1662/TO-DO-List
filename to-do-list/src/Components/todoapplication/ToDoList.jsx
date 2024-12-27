import React from "react";
import ToDoItem from "./ToDoItem";
import styles from "./todolist.module.css";

const ToDoList = ({ todos, setTodos }) => {
  return (
    <div className={styles.item}>
      {todos.map((item) => (
        <ToDoItem key={item} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default ToDoList;
