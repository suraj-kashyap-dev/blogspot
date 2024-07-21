const BaseSwitchBox = ({ name, checked, onChange, className, ...props }) => {
  const handleSwitchChange = (event) => {
    onChange({
      target: {
        type: 'checkbox',
        name,
        checked: event.target.checked,
      },
    });
  };

  return (
    <label className={`relative inline-flex items-center cursor-pointer ${className}`}>
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={handleSwitchChange}
        className="sr-only peer"
        {...props}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white" />
    </label>
  );
};

export default BaseSwitchBox;
