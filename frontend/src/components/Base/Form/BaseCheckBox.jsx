const BaseCheckBox = ({ name, checked, onChange, onBlur, error, touched, label, className, ...props }) => {
    return (
      <div className={`flex items-center ${className}`}>
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          className={`form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out ${
            error && touched ? "border-red-500" : "border-gray-300"
          }`}
          {...props}
        />
        <label htmlFor={name} className="ml-2 block text-sm text-gray-900 dark:text-white">
          {label}
        </label>
      </div>
    );
  };
  
  export default BaseCheckBox;
  