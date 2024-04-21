import React from "react";
import wineData from "../Data/Wine-Data.json";
import { MeanByClass, MedianByClass , ModeByClass } from "../Components/functionalities";

const HomePage = () => {
  const classFlavanoidsMeans = MeanByClass(wineData, "Flavanoids"); 
  // console.log("mean" , classMeans);
  const classFlavanoidsMedians = MedianByClass(wineData, "Flavanoids"); 
  // console.log("median " , classMedians);
  const classFlavanoidsMode = ModeByClass(wineData, "Flavanoids");

  const classGammaMeans = MeanByClass(wineData, "Gamma");
  const classGammaMedians = MedianByClass(wineData, "Gamma");
  const classGammaMode = ModeByClass(wineData, "Gamma");


  return (
    <div>
      <h1>Statistical Measures of Flavonoids for Different Alcohol Classes</h1>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(classFlavanoidsMeans).map((className) => (
              <th key={className}>Class {className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Flavonoids Mean</th>
            {Object.values(classFlavanoidsMeans).map((mean, index) => (
              <td key={index}>{mean.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <th>Flavonoids Median</th>
            {Object.values(classFlavanoidsMedians).map((median, index) => (
              <td key={index}>{median.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <th>Flavonoids Mode</th>
            {Object.values(classFlavanoidsMode).map((mode, index) => (
              <td key={index}>{mode}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(classGammaMeans).map((className) => (
              <th key={className}>Class {className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Flavonoids Mean</th>
            {Object.values(classGammaMeans).map((mean, index) => (
              <td key={index}>{mean.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <th>Flavonoids Median</th>
            {Object.values(classGammaMedians).map((median, index) => (
              <td key={index}>{median.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <th>Flavonoids Mode</th>
            {Object.values(classGammaMode).map((mode, index) => (
              <td key={index}>{mode.toFixed(3)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
