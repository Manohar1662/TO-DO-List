import React, { useState } from "react";
import FormComponent from "./FormComponent";
import ToDoList from "./ToDoList";

const To_do_list = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <FormComponent todos={todos} setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default To_do_list;
