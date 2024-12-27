import React from "react";
import styles from "./todoitem.module.css";

const ToDoItem = ({ item, todos, setTodos }) => {
  // ---------------------Deleting items from todo list---------------------------
  function itemdelete(item) {
    console.log("delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {item}

        <span>
          <button onClick={() => itemdelete(item)}>X</button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
};

export default ToDoItem;
