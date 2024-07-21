const BaseLabel = ({
  htmFor = "",
  label = "Default Label",
  className,
  ...props
}) => {
  return (
    <label
      htmlFor={htmFor}
      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white
        ${className}`}
      {...props}
    >
      {label}
    </label>
  );
};

export default BaseLabel;
