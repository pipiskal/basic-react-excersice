import styles from "./BottomSheet.module.css";
import Text from "../../../../components/Text/Text";
import Button from "../../../../components/Button/Button";

type BottomSheetProps = {
  skipSize: number;
  hireDays: number;
  onBack: () => void;
  onContinue: () => void;
};

const BottomSheet = ({
  skipSize,
  hireDays,
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

          <Text content="£" type="span" color="blue" fw={600} size="xl" />

          <Text
            content={`${hireDays} day hire`}
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
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
