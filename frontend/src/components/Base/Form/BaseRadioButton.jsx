const BaseRadioButton = ({ name, value, checked, onChange, onBlur, label, className, ...props }) => {
    return (
      <div className={`flex items-center ${className}`}>
        <input
          id={value}
          name={name}
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
          {...props}
        />
        <label htmlFor={value} className="ml-2 block text-sm text-gray-900 dark:text-white">
          {label}
        </label>
      </div>
    );
  };
  
  export default BaseRadioButton;
  