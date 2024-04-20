import React from "react";

const sortDataByClass = (dataset, callback) => {
  const dataByClass = {};

  dataset.forEach((entry) => {
    const { Alcohol, Flavanoids } = entry;
    const FlavanoidsNumber = parseFloat(Flavanoids);

    if (!isNaN(FlavanoidsNumber)) {
      if (!dataByClass[Alcohol]) {
        dataByClass[Alcohol] = [];
      }
    }

    dataByClass[Alcohol].push(FlavanoidsNumber);
  });

  return Object.entries(dataByClass).reduce((acc, [className, classData]) => {
    acc[className] = callback(classData);
    return acc;
  }, {});
};

export const MeanByClass = (dataset) => {
  const classMeans = sortDataByClass(dataset, (data) => {
    const sum = data.reduce((acc, value) => acc + value, 0);
    return sum / data.length;
  });

  return classMeans;
};

export const MedianByClass = (dataset) => {
  const classMedians = sortDataByClass(dataset, (data) => {
    const sortedData = data.sort((a, b) => a - b);
    console.log("sort" , sortedData);
    const len = sortedData.length;
    console.log(len);
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




// const dataByClass = {};

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
