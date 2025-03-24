import { JSX } from "react";
import styles from "./Tag.module.css";
import Text from "../Text/Text";

type TagProps = {
  content: string;
};

const Tag = ({ content }: TagProps): JSX.Element => {
  return (
    <div className={`${styles.wrapper} align-justify-center`}>
      <Text content={content} type="span" fw={600} size="sm" />
    </div>
  );
};

export default Tag;
