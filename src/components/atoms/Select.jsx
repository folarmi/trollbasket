const Select = ({
  values,
  onValueChange,
  selectedValue,
  className,
  ...rest
}) => {
  return (
    <div>
      <select
        className=""
        defaultValue={selectedValue}
        onChange={({ target: { value } }) => onValueChange(value)}
        {...rest}
      >
        {values.map(([value, text]) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };
