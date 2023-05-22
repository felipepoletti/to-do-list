import React from "react";

const TodoForm = () => {
  return <div className="todo-form">
    <h2>Criar tarefa:</h2>
    <form>
      <input type="text" placeholder="Título da tarefa"/>
      <select>
        <option value="">Selecione a categoria</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Estudos">Estudos</option>
        <option value="Pessoal">Pessoal</option>
      </select>
      <button type="submit">Criar tarefa</button>
    </form>
  </div>;
};

export default TodoForm;