import { useEffect, useState } from "react";
import { SkipItem } from "../../../modules/types";

const useSkipQuery = () => {
  const [skips, setSkips] = useState<SkipItem[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  console.log("skips", skips);

  const getSkips = async () => {
    const url =
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json: SkipItem[] = await response.json();

      // sort them write away based on size
      setSkips(json.sort((a, b) => a.size - b.size));
    } catch (error: any) {
      // we can do specific error handling maybe depending on the status or cause? but for now in any case an error appears with handle all of them in one way

      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSkips();
  }, []);

  return { isLoading, skips, hasError };
};

export default useSkipQuery;
