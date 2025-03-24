import SkipSizeCard from "./SkipSizeCard/SkipSizeCard";
import styles from "./SkipList.module.css";
import { SkipItem } from "../../../../modules/types";
import Spinner from "../../../../components/Spinner/Spinner";
import Text from "../../../../components/Text/Text";

type SkipListProps = {
  skips: SkipItem[];
  selectedSkipId: number | null;
  isLoading: boolean;
  hasError: boolean;
  onSkipSelection: (skipId: number) => void;
};

const SkipList = ({
  skips,
  selectedSkipId,
  isLoading,
  hasError,
  onSkipSelection,
}: SkipListProps) => {
  return isLoading ? (
    <div className={styles.spinnerWrapper}>
      <Spinner />
    </div>
  ) : (
    <>
      {hasError && (
        <Text
          content={
            "An error occurred please, try to refresh. If its still not working we are looking into it. Thank you for your patience"
          }
          type="heading3"
          size="lg"
          fw={800}
          mb={8}
        />
      )}

      {!hasError && skips.length === 0 && (
        <Text
          content={"No results"}
          type="heading3"
          size="lg"
          fw={800}
          mb={8}
        />
      )}

      {!hasError && skips.length > 0 && (
        <div className={styles.wrapper}>
          {skips.map((skip) => {
            return (
              <SkipSizeCard
                key={skip.id}
                isSelected={selectedSkipId === skip.id}
                image={"/images/skipImage.png"}
                title={"Takis"}
                description={"14 day hire period"}
                pricePerWeek={skip.price_before_vat}
                numberOfYards={skip.size}
                onClick={() => onSkipSelection(skip.id)}
                isPrivateProperty={skip.allowed_on_road}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default SkipList;
