import React from 'react';


// Tarea: Al editar anadir input con el valor actual y cambie el boton de edit por un save

const TodoItem = ({
  editing,
  completed,
  textContent,
  handleDeleteTodo,
  handleTodoEdit,
  handleTodoCompleteToggle,
}) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleTodoCompleteToggle}
        />
        <p 
          className={`pl-3 text-lg ${completed && 'line-through'}`}
        >
          {textContent}
        </p>
      </div>
      <div className="flex flex-row gap-x-2">
        {
          editing ? (
            <p>Currently editing</p>
          ) : (
            <p>Not editing</p>
          )
        }
        <button onClick={handleTodoEdit}>
          Edit
        </button>
        <button onClick={handleDeleteTodo}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
