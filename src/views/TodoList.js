import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CreateTodo from '../components/createTodo';
import TodoItem  from '../components/todoItem';

const TodoList = () => {
  // React hook
  const [todoItems, setTodoItems] = useState([]);
  const [editId, setEditId] = useState('');

  const handleTodoCreation = (content) => {
    if (!content.split(' ').join('').length) return;

    setTodoItems([
      {
        id: uuidv4(),
        completed: false,
        textContent: content,
      },
      ...todoItems,
    ]);
  };

  const handleTodoEdit = (id) => {
    setEditId(id);
  };

  const handleDeleteTodo = (id) => {
    const newTodolist = todoItems.filter(todo => todo.id !== id);

    setTodoItems(newTodolist);
  };

  const handleTodoCompleteToggle = (id) => {
    const newTodolist = todoItems.map((todo) => {
      const completed = todo.id === id ? !todo.completed : todo.completed;

      return {
        ...todo,
        completed,
      };
    }).sort((x, y) => ((y.completed === x.completed)? 0 : y.completed? -1 : 1));

    setTodoItems(newTodolist);
  };
  
  return (
    <div className="w-100 flex-col items-center pt-4 px-8">	
      <CreateTodo 
        handleTodoCreation={handleTodoCreation}
      />
      <div className="flex flex-col gap-y-2">
        { todoItems.map(({ id, textContent, completed }) => (
          <TodoItem
            key={id}
            completed={completed}
            editing={editId === id}
            textContent={textContent}
            handleDeleteTodo={() => handleDeleteTodo(id)}
            handleTodoCompleteToggle={() => handleTodoCompleteToggle(id)}
            handleTodoEdit={() => handleTodoEdit(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
