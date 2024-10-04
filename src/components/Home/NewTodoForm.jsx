import React, { useRef, useState } from "react";
import { IoAdd } from "react-icons/io5";

const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");
  const dialogRef = useRef(null); // Ref to control the modal
  const focusRef = useRef(null);

  const maxLength = 30;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem.trim() === "") return; // Avoid adding empty items

    onSubmit(newItem);
    // Close the modal
    dialogRef.current.close();
    setNewItem("");
  };

  const closeModal = () => {
    dialogRef.current.close(); // Close the modal using ref
  };

  const clickEnter = (e) => {
    if (e.key === "Enter") handleSubmit(e); // Submit form on 'Enter' key press
  };

  return (
    <>
      <button
        className="shadow-lg absolute bottom-0 right-0 flex text-5xl font-bold text-center m-7 btn btn-circle h-16 w-16 md:h-[75px] md:w-[75px] bg-yellow-950 hover:bg-yellow-900 border-0 active:bg-yellow-800 active:scale-90 outline-none z-10 transition-all duration-300 ease-in-out transform hover:scale-105"
        onClick={() =>
          dialogRef.current.showModal() && focusRef.current.focus()
        } // Open the modal using ref
      >
        <IoAdd className="size-10 md:size-16" color="white" />
      </button>

      {/* Modal */}
      <dialog ref={dialogRef} id="add_note" className="modal">
        <div className="w-5/6 h-auto bg-yellow-100 modal-box">
          <form method="dialog" onSubmit={handleSubmit} onKeyDown={clickEnter}>
            <div className="flex flex-col p-8">
              <label
                htmlFor="item"
                className="pb-1 font-sans text-lg text-accent"
              >
                New Task
              </label>

              <textarea
                placeholder="Add a new item..."
                autoFocus={true} // Focus on input field on modal open
                type="text"
                id="item"
                maxLength={maxLength}
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                className="flex-grow p-2 text-lg border-2 border-gray-300 rounded-md resize-none focus:outline-none scroll-smooth text-secondary"
                ref={focusRef}
              />
              <p className="text-sm text-gray-600">
                {newItem.length}/{maxLength} characters
              </p>
              <div className="flex flex-row justify-end place-items-end">
                <button
                  type="submit"
                  className="w-20 h-10 mt-3 font-semibold text-white transition-all duration-300 ease-in-out transform bg-yellow-800 rounded-lg shadow-lg hover:bg-yellow-700 active:bg-yellow-700 place-content-end active:scale-90 hover:scale-105"
                >
                  ADD
                </button>
              </div>
            </div>
          </form>
          <button
            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            onClick={closeModal} // Close the modal when '✕' is clicked
          >
            ✕
          </button>
        </div>
      </dialog>
    </>
  );
};

export default NewTodoForm;
