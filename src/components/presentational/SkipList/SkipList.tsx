import { JSX } from "react";
import SkipSizeCard from "./SkipSizeCard/SkipSizeCard";
import styles from "./SkipList.module.css";

type SkipItem = {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: null | number;
  per_tonne_cost: null | number;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: null | string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
};

type SkipListProps = {
  selectedSkipId: number | null;
  onSkipSelection: (skipId: number) => void;
  skips: SkipItem[];
};

const SkipList = ({
  skips,
  selectedSkipId,
  onSkipSelection,
}: SkipListProps): JSX.Element => {
  return (
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
          />
        );
      })}
    </div>
  );
};

export default SkipList;
