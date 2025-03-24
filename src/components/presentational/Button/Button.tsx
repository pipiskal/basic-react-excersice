import React from "react";
import { JSX } from "react";
import styles from "./Button.module.css";
import Text from "../Text/Text";

type ButtonProps = {
  content: string;
  variant: "primary" | "secondary";
  onClick: () => void;
};

const Button = ({ content, variant, onClick }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles.wrapper} align-justify-center`}
      onClick={onClick}
    >
      <Text content={content} type="span" fw={600} />
    </button>
  );
};

export default Button;
