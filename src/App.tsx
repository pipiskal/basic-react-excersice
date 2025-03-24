/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import SelectSkip from "./features/SelectSkip/SelectSkip";
import Button from "./components/Button/Button";

function App() {
  // Just for demonstration. Depending how we need the data or the complexity we can use reducer of context if we have more that 3 steps of prop drilling
  const [gatheredInformationFromEachStep, setGatheredInformationFromEachStep] =
    useState<any>({});

  const [selectedStep, setSelectedStep] = useState<number>(3);

  const STEPS: { [key: number]: React.ReactNode } = {
    1: <div>Post code</div>,
    2: (
      <div>
        <Button
          content="Go back to Select a skip"
          variant="primary"
          size="md"
          onClick={() => setSelectedStep(3)}
        />
      </div>
    ),
    3: (
      <SelectSkip
        onContinue={(selectSkipDetails) => {
          console.log(
            "Update whatever parent state you have since you gathered the information from Select Skip state and move to the next, to gather the rest of the info"
          );
        }}
        onBack={() => {
          setSelectedStep(2);
        }}
      />
    ),
    4: <div>Permit check</div>,
    5: <div>Choose Rate</div>,
    6: <div>Payment</div>,
  };

  return <div className="App">{STEPS[selectedStep]}</div>;
}

export default App;
