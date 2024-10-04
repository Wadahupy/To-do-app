import React, { useState, useRef, useEffect } from "react";

import NewTodoForm from "../components/Home/NewTodoForm";
import TodoList from "../components/Home/TodoList";

const HomePage = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("ITEM"));
    return savedTodos || []; // Return saved todos if available, otherwise return an empty array
  });
  const dialogRef = useRef(null); // Ref to control the modal
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: completed }; // Toggle the checkbox state correctly
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  const addTodo = (title) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  };

  return (
    <>
      <div
        className="bg-beige rounded-2xl h-[700px] w-11/12 md:h-[700px] md:w-[700px] mx-auto my-20 relative"
        data-theme="light"
      >
        <NewTodoForm onSubmit={addTodo} />
        <h1 className="pt-8 font-sans text-4xl font-bold text-center text-accent md:text-5xl">
          To-do list
        </h1>
        <hr className="h-1 mt-3 border-0 bg-primary dark:bg-gray-700"></hr>
        <div className="overflow-y-scroll mx-0 h-[500px] overflow-x-hidden mt-2 no-scrollbar">
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
