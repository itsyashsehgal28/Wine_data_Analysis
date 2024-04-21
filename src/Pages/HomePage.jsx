import React, { useState, useEffect } from "react";
import wineData from "../Data/Wine-Data.json";
import {
  MeanByClass,
  MedianByClass,
  ModeByClass,
} from "../Components/functionalities";
import StatisticalTable from "../Components/StatisticalTable";

const HomePage = () => {
  // Use state to hold the data
  const [flavanoidsData, setFlavanoidsData] = useState(null);
  const [gammaData, setGammaData] = useState(null);

  useEffect(() => {
    // Fetch and process flavanoids data
    const flavanoidsMeans = MeanByClass(wineData, "Flavanoids");
    const flavanoidsMedians = MedianByClass(wineData, "Flavanoids");
    const flavanoidsMode = ModeByClass(wineData, "Flavanoids");
    setFlavanoidsData({
      mean: flavanoidsMeans,
      median: flavanoidsMedians,
      mode: flavanoidsMode,
    });

    // Fetch and process gamma data
    const gammaMeans = MeanByClass(wineData, "Gamma");
    const gammaMedians = MedianByClass(wineData, "Gamma");
    const gammaMode = ModeByClass(wineData, "Gamma");
    setGammaData({ mean: gammaMeans, median: gammaMedians, mode: gammaMode });
  }, []); // Empty dependency array to run once on mount

  // Render loading or error state while data is being fetched
  if (!flavanoidsData || !gammaData) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or any loading indicator
  }

  return (
    <div>
      {/* Display flavanoids data table */}
      <h1 style={{ margin: "0 auto", textAlign: "center" }}>
        Statistical Measures of Flavonoids for Different Alcohol Classes
      </h1>
      <StatisticalTable title='Flavanoids' data={flavanoidsData} />

      {/* Display gamma data table */}
      <h1 style={{ margin: "0 auto", textAlign: "center" }}>
        Statistical Measures of Gamma for Different Alcohol Classes
      </h1>
      <StatisticalTable title= 'Gamma' data={gammaData} />
    </div>
  );
};

export default HomePage;
