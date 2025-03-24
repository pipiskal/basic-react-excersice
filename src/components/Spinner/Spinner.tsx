import { LoaderCircle } from "lucide-react";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <LoaderCircle
      color={"var(--colors-blue)"}
      className={styles.spinner}
      size={36}
    />
  );
};

export default Spinner;
