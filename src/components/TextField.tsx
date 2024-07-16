import React, { FC } from "react";
import PropTypes from "prop-types";

interface TextFieldProps {
  label: string;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  size?: "small" | "large";
  handleChange: any;
}

const TextField: FC<TextFieldProps> = ({
  label,
  maxLength,
  minLength,
  placeholder,
  size = "small",
  handleChange,
}) => {
  const textFieldSize =
    size === "small" ? "small-text-field" : "large-text-field";

  return (
    <div className={`text-field ${textFieldSize}`}>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        onBlur={handleChange}
      />
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["small", "large"]),
};

export default TextField;
