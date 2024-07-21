import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  const header = React.Children.toArray(children).find(
    (child) => child.type === Header
  );

  const body = React.Children.toArray(children).find(
    (child) => child.type === Body
  );

  const footer = React.Children.toArray(children).find(
    (child) => child.type === Footer
  );

  return (
    <div className="fixed inset-0 z-50 overflow-auto w-full bg-smoke-800 flex">
      <div className="relative bg-white w-full max-w-md m-auto  flex-col flex rounded-lg  dark:text-white dark:bg-gray-900">
        <div className="flex items-center justify-between gap-2.5 border-b dark:border-gray-800 px-4 py-3">
          <div className="!text-sm"> {header} </div>

          <div
            className="cursor-pointer rounded-md p-2 text-2xl transition-all dark:text-white"
            onClick={onClose}
          >
           <i className="fa-solid fa-xmark text-xl"></i>
          </div>
        </div>
        <div>{body}</div>
        <div className="flex justify-end pt-2">{footer}</div>
      </div>
    </div>
  );
};

const Header = ({ children }) => (
  <p className="text-2xl font-bold">{children}</p>
);
const Body = ({ children }) => <div>{children}</div>;
const Footer = ({ children }) => <div>{children}</div>;

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
