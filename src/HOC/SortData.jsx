/**
 * Sorts the dataset by alcohol class and applies a callback function.
 * 
 * @param {Array} dataset - The dataset to be sorted.
 * @param {Function} callback - The callback function to be applied.
 * @returns {Object} - An object containing the result of the callback function for each alcohol class.
 * 
 */
export const sortDataByClass = (dataset, property, callback) => {
  const dataByClass = {};
  dataset.forEach((entry) => {
    const { Alcohol, Flavanoids, Ash, Magnesium, Hue } = entry;
    let value;

    if (property === "Flavanoids") {
      value = parseFloat(Flavanoids);
    } else if (property === "Gamma") {
      value = (parseFloat(Ash) * parseFloat(Hue)) / parseFloat(Magnesium);
      // Gamma = (Ash * Hue ) / Magnesium 
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

/*
   STEP BY STEP EXPLANATION
    1. sortDataByClass gets 3 parameters : Dataset , property , callback

       Dataset is the wineData 
       property is either Flavanoids or Gamma
       callback is ClassData on how to manipulate the data after it is sorted into classes of alcohol 

    2. entry will contain data from winedata for a single entry and we will check which data is needed 

       if we need flavanoids data we wont be calculating gamma values which will save a lot of space and reduce time complexity

    3. if the value is not a number it wont go through the loop , after that we are initializing alcohol class array 

    4. pushing sorted data into the databyclass object 

       dataset example : {1: [2.5, 3.0], 2: [1.5, 2.0]} 
       dataset is divided into key : value pairs where key is the alcohol class and values are an array of classData

    5. in return statement object.entries convert this data into an array of key value pairs 
       dataset example : [[1, [2.5, 3.0]], [2, [1.5, 2.0]]]

    6. Reduce takes in acc , value but instead of value we have given className , classData hence data will be reduced to a single 
       output 
    
    7. in the next line the callback is sent with the classData and the statistical measure is calculated and its value is stored 
       based on the class it was in 

*/