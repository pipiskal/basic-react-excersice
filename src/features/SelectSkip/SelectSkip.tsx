import { useState } from "react";
import Text from "../../components/Text/Text";
import SkipList from "./components/SkipList/SkipList";
import styles from "./SelectSkip.module.css";
import useSkipQuery from "./hooks/useSkipQuery";
import BottomSheet from "./components/BottomSheet/BottomSheet";
import { SkipItem } from "../../modules/types";

type SelectSkipProps = {
  onContinue: (value: SkipItem) => void;
  onBack: () => void;
};

const SelectSkip = ({ onContinue, onBack }: SelectSkipProps) => {
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);

  const { isLoading, skips, hasError } = useSkipQuery();

  const selectedSkip = skips.find((skip) => skip.id === selectedSkipId);

  return (
    <div className={styles.wrapper}>
      <Text
        content="Choose Your Skip Size"
        type="heading2"
        fw={800}
        size="xl"
        mb={20}
      />

      <Text
        content="Select the skip size that best suits your needs"
        type="span"
        color="gray"
        fw={600}
        mb={32}
      />

      <SkipList
        skips={skips.sort((a, b) => a.size - b.size)}
        selectedSkipId={selectedSkipId}
        isLoading={isLoading}
        hasError={hasError}
        onSkipSelection={(skipId) => setSelectedSkipId(skipId)}
      />

      {selectedSkip?.id && (
        <BottomSheet
          skipSize={selectedSkip.size}
          hireDays={selectedSkip?.hire_period_days}
          onContinue={() => onContinue(selectedSkip)}
          onBack={onBack}
        />
      )}
    </div>
  );
};

export default SelectSkip;
