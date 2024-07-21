import React from "react";
import { useModal } from "./ModalContext";

const ConfirmModal = () => {
  const { isOpen, title, message, options, disagree, agree } = useModal();

  if (! isOpen) {
    return null
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-50"></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="box-shadow absolute z-[999] w-full max-w-md transform overflow-hidden rounded-lg bg-white dark:bg-gray-900">
          <div className="flex items-center justify-between gap-2.5 border-b px-4 py-3 text-lg font-bold text-gray-800 dark:border-gray-800 dark:text-white">
            {title}
          </div>

          <div className="px-4 py-3 text-left text-gray-600 dark:text-gray-300">
            {message}
          </div>

          <div className="flex justify-end gap-2.5 px-4 py-2.5">
            <button
              type="button"
              className="dark:text-gray-300"
              onClick={disagree}
            >
              {options.btnDisagree}
            </button>

            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={agree}
            >
              {options.btnAgree}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;
