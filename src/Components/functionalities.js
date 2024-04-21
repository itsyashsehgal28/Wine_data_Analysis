import React from "react";

const sortDataByClass = (dataset, property, callback) => {
  const dataByClass = {};
  dataset.forEach((entry) => {
    const { Alcohol, Flavanoids, Ash, Magnesium, Hue } = entry;
    let value;

    if (property === "Flavanoids") {
      value = parseFloat(Flavanoids);
    } 
    else if (property === "Gamma") {
      value = (parseFloat(Ash) * parseFloat(Hue)) / parseFloat(Magnesium);
    }

    if (!isNaN(value)) {
      if (!dataByClass[Alcohol]) {
        dataByClass[Alcohol] = [];
      }

      dataByClass[Alcohol].push(value);
    }
  });
  return Object.entries(dataByClass).reduce((acc, [className, classData]) => {
    acc[className] = callback(classData);
    return acc;
  }, {});
};

export const MeanByClass = (dataset , property) => {
  const classMeans = sortDataByClass(dataset, property , (data) => {
    const sum = data.reduce((acc, value) => acc + value, 0);
    return sum / data.length;
  });

  return classMeans;
};

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

// dataset.forEach((entry) => {
//     const { Alcohol, Flavanoids } = entry; ;
//     const FlavanoidsNumber = parseFloat(Flavanoids);

//     if(!isNaN(FlavanoidsNumber)){
//         if(!dataByClass[Alcohol])
//     {
//         dataByClass[Alcohol]=[];
//     }
//     };

//     dataByClass[Alcohol].push(FlavanoidsNumber);
// });
// // console.log(dataByClass);
// const classMeans = {};
// for (const className in dataByClass){
//     const data = dataByClass[className];
//     const sum = data.reduce((acc , value) => acc + value , 0);
//     classMeans[className] = sum / data.length;
//     // console.log(data);
//     // console.log(sum);
// };
// console.log(classMeans);
// return classMeans;
