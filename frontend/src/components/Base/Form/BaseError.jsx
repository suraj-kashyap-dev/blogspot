const BaseError = ({ error = false, touched = false, className, ...props }) => {
  return (
    <>
      {error && touched && (
        <p
          className={`text-red-500 text-xs italic
          ${className}`}
          {...props}
        >
          {error}
        </p>
      )}
    </>
  );
};

export default BaseError;
