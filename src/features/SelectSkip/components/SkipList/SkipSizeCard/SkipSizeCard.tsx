import styles from "./SkipSizeCard.module.css";
import Tag from "../../../../../components/Tag/Tag";
import { Check } from "lucide-react";
import Text from "../../../../../components/Text/Text";
import Button from "../../../../../components/Button/Button";

type SkipSizeCardProps = {
  image: string;
  title: string;
  description: string;
  pricePerWeek: number;
  numberOfYards: number;
  isSelected?: boolean;
  isPrivateProperty?: boolean;
  onClick: () => void;
};

const SkipSizeCard = ({
  image,
  title,
  description,
  pricePerWeek,
  numberOfYards,
  isSelected = false,
  isPrivateProperty = false,
  onClick,
}: SkipSizeCardProps) => {
  return (
    <div
      className={`${styles.wrapper} ${isSelected && styles.selectedItem}`}
      onClick={onClick}
    >
      <div className={styles.imageWrapper}>
        <img
          src={image}
          className={styles.skipImage}
          alt={`${numberOfYards} Yard Skip`}
        />

        <div className={styles.tagWrapper}>
          <Tag content={`${numberOfYards} Yards`} />
        </div>

        {isSelected && (
          <Check
            color="var(--colors-blue)"
            className={styles.checkMark}
            size={32}
          />
        )}

        {isPrivateProperty && (
          <div className={styles.privateProperty}>
            <Check
              color="var(--colors-blue)"
              className={styles.checkMark}
              size={32}
            />

            <Text
              content={`${numberOfYards} Yard Skip`}
              type="heading3"
              size="lg"
              fw={800}
              mb={8}
            />
          </div>
        )}
      </div>

      <Text
        content={`${numberOfYards} Yard Skip`}
        type="heading3"
        size="lg"
        fw={800}
        mb={8}
      />

      <Text
        content={description}
        type="paragraph"
        size="sm"
        color="gray"
        mb={24}
      />

      <div className={styles.priceWrapper}>
        <Text
          content={`£${pricePerWeek}`}
          type="span"
          size="xl"
          color="blue"
          fw={700}
        />

        <Text content="per week" type="span" color="gray" size="sm" />
      </div>

      <Button
        content={isSelected ? "Selected" : "Select this skip"}
        variant={isSelected ? "primary" : "secondary"}
        onClick={onClick}
      />
    </div>
  );
};

export default SkipSizeCard;
