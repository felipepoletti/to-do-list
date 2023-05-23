import React from "react";

const Todo = ({ todo, removeTodo }) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete">Done</button>
        <button onClick={() => removeTodo(todo.id)} className="remove">x</button>
      </div>
    </div>
  );
};

export default Todo;