import PropTypes from "prop-types";
import { memo, useId } from "react";
const Input = memo(function Input({
  type = "text",
  name,
  label,
  value = "",
  onChange = () => {},
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={`${label}...`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
});
Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Input;
