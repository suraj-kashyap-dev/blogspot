const BaseSelect = ({
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  options,
  className,
  children,
  ...props
}) => {
  return (
    <div>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${
          error && touched ? "border-red-500" : "border-gray-300"
        } ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
};

export default BaseSelect;
