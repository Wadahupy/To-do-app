import React from "react";
import task from "/src/assets/glasses-rafiki.svg";
import TodoItem from "/src/components/Home/TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.length == 0 && (
        <div className="flex flex-col justify-center place-items-center">
          <img src={task} className="w-[500px] h-[300px]" />
          <h1 className="font-sans text-2xl text-center text-accent md:text-4xl">
            No currently task
          </h1>
        </div>
      )}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
