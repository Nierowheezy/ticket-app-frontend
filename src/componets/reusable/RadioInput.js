import PropTypes from "prop-types";
import React from "react";

const RadioInput = (props) => {
  const { id, name, onChange, className, value, error, labelClassName } = props;
  return (
    <>
      <input
        className={className}
        type="radio"
        name={name}
        id={id}
        value={value}
        autoComplete="false"
        onChange={onChange}
      />
      <label
        style={{ color: error ? "red" : "#ffffff", fontWeight: "normal" }}
        className={labelClassName}
        htmlFor={id}
      >
        {value}
      </label>
    </>
  );
};

RadioInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  labelClassName: PropTypes.string,
};

export { RadioInput };
