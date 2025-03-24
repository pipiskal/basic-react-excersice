import React from "react";
import "./App.css";
import SkipSizeCard from "./components/presentational/SkipList/SkipSizeCard/SkipSizeCard";
function App() {
  return (
    <div className="App">
      <br />

      <br />

      <SkipSizeCard
        image={"/images/skipImage.png"}
        title={"Takis"}
        description={"14 day hire period"}
        pricePerWeek={4}
        numberOfYards={4}
        onClick={() => console.log("clicked")}
        isSelected
      />
    </div>
  );
}

export default App;
