import React, { useState } from 'react';

const CreateTodo = ({ handleTodoCreation }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const createTodo = () => {
    handleTodoCreation(value);
    setValue('');
  };

  return (
    <div className="flex flex-col items-center">
      <input
        className="w-44 text-center border-b-2 border-slate-800 mb-2 outline-0"
        value={value}
        placeholder={"Enter todo"}
        onChange={handleInputChange}
        type="text"
      />
      <button
        className="ease-in-out duration-300 p-2 rounded-md border-slate-800 hover:bg-slate-200 border hover:scale-110"
        onClick={createTodo}
      >
        Create Todo item
      </button>
    </div>
  );
};

export default CreateTodo;
