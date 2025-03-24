import styles from "./Button.module.css";
import Text from "../Text/Text";

type ButtonProps = {
  content: string;
  variant: "primary" | "secondary";
  size?: "md" | "lg";
  onClick: () => void;
  iconRight?: React.ReactNode;
};

const Button = ({
  content,
  variant,
  onClick,
  size = "lg",
  iconRight = null,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.wrapper} ${styles[variant]} ${styles[size]}  align-justify-center`}
      onClick={onClick}
    >
      <Text content={content} type="span" fw={600} />

      {iconRight && (
        <div className={`${styles.iconWrapper} align-justify-center`}>
          {iconRight}
        </div>
      )}
    </button>
  );
};

export default Button;
