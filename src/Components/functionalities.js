import React from 'react';

export const MeanByClass = (dataset) => {
    const dataByClass = {};
    
    dataset.forEach((entry) => {
        const { Alcohol, Flavanoids } = entry; ;

        if(!dataByClass[Alcohol])
        {
            dataByClass[Alcohol]=[];
        }

        dataByClass[Alcohol].push(Flavanoids);
    });

    const classMeans = {};
    for (const className in dataByClass){
        const data = dataByClass[className];
        const sum = data.reduce((acc , value) => acc + value , 0);
        classMeans[className] = sum / data.length();
    };

    return classMeans;
}

