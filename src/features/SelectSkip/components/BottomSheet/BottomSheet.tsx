import styles from "./BottomSheet.module.css";
import Text from "../../../../components/Text/Text";
import Button from "../../../../components/Button/Button";
import { ArrowRight } from "lucide-react";

type BottomSheetProps = {
  skipSize: number;
  hireDays: number;
  price: number;
  onBack: () => void;
  onContinue: () => void;
};

const BottomSheet = ({
  skipSize,
  hireDays,
  price,
  onBack,
  onContinue,
}: BottomSheetProps) => {
  return (
    <div className={`${styles.container} align-justify-center`}>
      <div className={styles.bottomSheet}>
        <div className={styles.skipDetails}>
          <Text
            content={`${skipSize} Yard Skip`}
            type="span"
            color="gray"
            fw={600}
          />

          {/* Currency symbol should be dynamic depending on the Country etc.. */}
          <Text
            content={`£${price}`}
            type="span"
            color="blue"
            fw={600}
            size="xl"
          />

          <Text
            content={`${hireDays} day hire period`}
            type="span"
            color="gray"
            fw={600}
          />
        </div>

        <div className={styles.actions}>
          <Button
            content={"Back"}
            variant="secondary"
            size="md"
            onClick={onBack}
          />

          <Button
            content="Continue"
            variant="primary"
            size="md"
            onClick={onContinue}
            iconRight={<ArrowRight size={16} color="var(--colors-white)" />}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
