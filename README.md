# How To Run The Project
- clone the github repository : "https://github.com/itsyashsehgal28/Wine_data_Analysis"
- cd to your project directory 
- yarn install 
- yarn start

## Project Workflow

This README file outlines the workflow of the project from `index.js` to `app.js` and how the data flows through various components.

## 1. index.js

`index.js` serves as the entry point of the React application.

### Responsibilities:
- Initializes the React application
- Renders the `App` component

## 2. App.js

`App.js` is the main component of the application.

### Responsibilities:
- Sets up routing for different pages
- Renders different pages based on the URL route

#### Routing:
- **Route 1:** "/" - Renders the `HomePage` component

## 3. HomePage.jsx

`HomePage.jsx` represents the main landing page of our application.

### Responsibilities:
- Displays statistical measures of Flavonoids and Gamma for different alcohol classes
- Calls functions from `functionalities.jsx` to calculate mean, median, and mode

## 4. functionalities.jsx

`functionalities.jsx` contains utility functions for data analysis.

### Responsibilities:
- Contains functions to calculate mean, median, and mode by alcohol class
- Utilizes the `sortDataByClass` function to organize data by alcohol class

## 5. sortDataByClass.jsx

`sortDataByClass.jsx` is a Higher-Order Component (HOC) that sorts data by alcohol class.

### Responsibilities:
- Accepts a dataset and a callback function
- Sorts the data into classes based on the alcohol property
- Passes sorted data to the callback function for further processing

## 6. StatisticalTable.jsx

`This component is responsible for displaying statistical tables for different measures.

### Responsibilities

- Renders a table with statistical measures for a given title and data.
- Formats the data to display mean, median, and mode for each class.
- Adds bold formatting to the first column of each row.
- Centers the text in each cell.
- Adds borders to separate rows and columns.








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
