import React from "react";
import styles from "./Button.module.css";
import Text from "../Text/Text";

type ButtonProps = {
  content: string;
  variant: "primary" | "secondary";
  size?: "md" | "lg";
  onClick: () => void;
};

const Button = ({ content, variant, onClick, size = "lg" }: ButtonProps) => {
  return (
    <button
      className={`${styles.wrapper} ${styles[variant]} ${styles[size]}  align-justify-center`}
      onClick={onClick}
    >
      <Text content={content} type="span" fw={600} />
    </button>
  );
};

export default Button;
