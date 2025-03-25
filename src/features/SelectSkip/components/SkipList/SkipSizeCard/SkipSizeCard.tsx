import styles from "./SkipSizeCard.module.css";
import Tag from "../../../../../components/Tag/Tag";
import { ArrowRight, Check, TriangleAlert } from "lucide-react";
import Text from "../../../../../components/Text/Text";
import Button from "../../../../../components/Button/Button";

type SkipSizeCardProps = {
  image: string;
  pricePerWeek: number;
  numberOfYards: number;
  numberOfHiringDays: number;
  isSelected?: boolean;
  isPrivateProperty?: boolean;
  onClick: () => void;
};

const SkipSizeCard = ({
  image,
  pricePerWeek,
  numberOfYards,
  numberOfHiringDays,
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
            <TriangleAlert color="var(--colors-yellow)" size={16} />

            <Text
              content="Private Property Only"
              type="span"
              size="xs"
              fw={800}
              mb={8}
              color="yellow"
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
        content={`${numberOfHiringDays} day hire period`}
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
        {...(!isSelected && {
          iconRight: <ArrowRight size={16} color="var(--colors-white)" />,
        })}
      />
    </div>
  );
};

export default SkipSizeCard;
