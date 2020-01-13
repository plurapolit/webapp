# PluraPolit Webapp

## Purpose

To give people the opportunity to share and consume audio statements concerning relevant political debates.

## Tech Stack

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Packages used

#### Fork of: mic-recorder-to-mp3

Used for recording audio statements. As the current version available via npm does not work on Safari we are using our own fork. [Here is the link to the original repo:](https://www.npmjs.com/package/mic-recorder-to-mp3)

#### react-aws-s3

Used to upload voice statements to S3. [Here is the link to the repo:](https://github.com/Developer-Amit/react-aws-s3)