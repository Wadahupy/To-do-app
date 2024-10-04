import React from "react";
import { IoTrashOutline } from "react-icons/io5";

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <li className="relative flex flex-row justify-between mx-10 my-3 place-items-center flex-wrap text-secondary">
      <label
        htmlFor={id}
        className={`font-sans text-xl break-words whitespace-normal ${
          completed ? "line-through text-gray-400" : ""
        } max-w-full`}
      >
        <input
          type="checkbox"
          id={id}
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
          className={`relative h-6 w-6 mr-2 align-middle appearance-none cursor-pointer rounded-md border-2 border-amber-900 
            checked:bg-amber-950 checked:border-amber-950 checked:after:content-['✓'] checked:after:text-white 
            checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center 
            checked:after:justify-center checked:after:text-lg checked:after:font-bold transition-all duration-300 
            ease-in-out transform hover:scale-110`}
        />
        {title}
      </label>
      <button
        className="flex justify-center w-10 h-10 text-xl transition-all duration-300 ease-in-out transform bg-red-500 shadow-md active:bg-red-300 active:scale-90 hover:bg-red-400 place-items-center btn-circle hover:scale-110"
        onClick={() => deleteTodo(id)}
      >
        <IoTrashOutline color="white" />
      </button>
    </li>
  );
};

export default TodoItem;
