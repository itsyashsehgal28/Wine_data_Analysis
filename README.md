return Object.entries(dataByClass).reduce((acc, [className, classData]) => {
    acc[className] = callback(classData);
    return acc;
}, {});
Object.entries(dataByClass): This method converts the dataByClass object into an array of [key, value] pairs, where each pair represents an entry in the object. For example, if dataByClass looks like 



{1: [2.5, 3.0], 2: [1.5, 2.0]},




 Object.entries(dataByClass) would return 
 
 
 
 [[1, [2.5, 3.0]], [2, [1.5, 2.0]]].



 
reduce((acc, [className, classData]) => { ... }, {}): This method applies a function to each element of the array (in this case, the array of [key, value] pairs), resulting in a single output value. The function takes two parameters:
acc: The accumulator. It accumulates the results of the callback function on each element of the array.
[className, classData]: Destructured parameters representing each element of the array. className is the key (in our case, the alcohol class), and classData is the value (an array of flavanoids values for that class).
acc[className] = callback(classData): Inside the function passed to reduce, this line assigns the result of calling the callback function with classData as the argument to the acc object. This effectively calculates the desired statistical measure (mean or median) for the current alcohol class (className) and stores it in the acc object with the class name as the key.
return acc;: This line returns the updated accumulator (acc) after each iteration. This updated accumulator is passed as the first argument to the next iteration of reduce.
Let's say callback is a function that calculates the mean or median of the flavanoids values for a given alcohol class. For example, if callback is the function that calculates the mean, callback(classData) would return the mean flavanoids value for the class represented by classData.

The entire reduce operation builds a new object (acc) where each key is an alcohol class, and each value is the result of applying the callback function to the flavanoids values of that class. Finally, this object is returned as the result of the reduce operation.

































# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
