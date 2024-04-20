import React from "react";
import wineData from "../Data/Wine-Data.json";
import { MeanByClass, MedianByClass } from "../Components/functionalities";

const HomePage = () => {
  const classMeans = MeanByClass(wineData);
  // console.log("mean" , classMeans);
  const classMedians = MedianByClass(wineData); 
  console.log("median " , classMedians)

  return (
    <div>
      <h1>Statistical Measures of Flavonoids for Different Alcohol Classes</h1>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(classMeans).map((className) => (
              <th key={className}>Class {className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Flavonoids Mean</th>
            {Object.values(classMeans).map((mean, index) => (
              <td key={index}>{mean.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <th>Flavonoids Median</th>
            {Object.values(classMedians).map((median, index) => (
              <td key={index}>{median.toFixed(3)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
