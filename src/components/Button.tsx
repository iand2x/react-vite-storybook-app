import PropTypes from "prop-types";
import React, { FC } from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  backgroundColor?: string;
  icon?: React.ReactNode;
  size?: "small" | "large";
  handleClick: any;
}

const Button: FC<ButtonProps> = ({
  title,
  backgroundColor,
  icon,
  size,
  handleClick,
}) => {
  const buttonSize = size === "small" ? "small-button" : "large-button";

  return (
    <button
      className={`button ${buttonSize}`}
      style={{ backgroundColor }}
      onClick={handleClick}
    >
      {icon && <span className="icon-button">{icon}</span>}
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  icon: PropTypes.node,
  size: PropTypes.oneOf(["small", "large"]),
};

export default Button;
