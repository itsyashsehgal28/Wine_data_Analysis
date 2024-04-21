import React from "react";
import { sortDataByClass } from "../HOC/SortData";

/** 
 * Calculates the mean value for each alcohol class in the dataset.
 * 
 * @param {Array} dataset - wineData
 * @param {string} property - Flavanoids or Gamma
 * @returns {Object} - An object containing the mean value for each alcohol class.

*/
export const MeanByClass = (dataset , property) => {
  const classMeans = sortDataByClass(dataset, property , (data) => {
    const sum = data.reduce((acc, value) => acc + value, 0);
    return sum / data.length;

    
  });

  return classMeans;
};

/**
 * Calculates the median value for each alcohol class in the dataset.
 * 
 * @param {Array} dataset - The dataset to calculate the median for.
 * @param {string} property - Flavanoids or Gamma

 * @returns {Object} - An object containing the median value for each alcohol class.
 */
export const MedianByClass = (dataset , property ) => {
  const classMedians = sortDataByClass(dataset, property , (data) => {
    const sortedData = data.sort((a, b) => a - b);
    const len = sortedData.length;

    if (len % 2 === 0) {
      // If even number of observations
      const midIndex1 = len / 2 - 1;
      const midIndex2 = len / 2;
      return (sortedData[midIndex1] + sortedData[midIndex2]) / 2;
    } else {
      // If odd number of observations
      const midIndex = (len + 1) / 2 - 1;
      return sortedData[midIndex];
    }
  });

  return classMedians;
};

/**
 * Calculates the mode value for each alcohol class in the dataset.
 * 
 * @param {Array} dataset - The dataset to calculate the mode for.
 * @param {string} property - Flavanoids or Gamma
 * @returns {Object} - An object containing the mode value for each alcohol class.
 */
export const ModeByClass = (dataset , property) => {
  const classMode = sortDataByClass(dataset, property , (data) => {
    const countMap = {};
    data.forEach((value) => {
      countMap[value] = (countMap[value] || 0) + 1;
      // checking if the key is present or not , if not then creating a key with value 0 and incrementing by 1
      // if present then just incrementing by 1
    });

    let maxCount = 0;
    let mode; // mode will be undefined for now
    for (const value in countMap) {
      if (countMap[value] > maxCount) {
        maxCount = countMap[value];
        mode = value;
        console.log(countMap);
      }
    }
    return parseFloat(mode);
  });
  return classMode;
};

