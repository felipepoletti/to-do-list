import React from "react";

const Todo = ({ todo, completeTodo, removeTodo }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button onClick={() => completeTodo(todo.id)} className="complete">Done</button>
        <button onClick={() => removeTodo(todo.id)} className="remove">x</button>
      </div>
    </div>
  );
};

export default Todo;