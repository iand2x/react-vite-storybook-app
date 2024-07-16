import PropTypes from "prop-types";
import React, { FC } from "react";

interface ButtonProps {
  title: string;
  backgroundColor?: string;
  icon?: React.ReactNode;
  size?: "small" | "large";
}

const Button: FC<ButtonProps> = ({ title, backgroundColor, icon, size }) => {
  const buttonSize = size === "small" ? "small-button" : "large-button";

  return (
    <button className={`button ${buttonSize}`} style={{ backgroundColor }}>
      {icon && <span>AppleIcon</span>}
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
