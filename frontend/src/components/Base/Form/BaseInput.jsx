const BaseInput = ({ type = "text", name, value, onChange, onBlur, error, touched, placeholder, className, ...props }) => {
  return (
    <>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${
          error && touched ? "border-red-500" : "border-gray-300"
        } ${className}`}
        {...props}
      />
    </>
  );
};

export default BaseInput;
