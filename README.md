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

#### mic-recorder-to-mp3

[Used to record statements](https://www.npmjs.com/package/mic-recorder-to-mp3) - in order for the package to work on Safari replace the 'start' function in the file node_modules/mic-recorder-to-mp3/dist/index.js starting from line 15912 with the following code snippet:

```
value: function start() {
        var _this2 = this;

        const AudioContext = window.AudioContext // Default
            || window.webkitAudioContext // Safari and old versions of Chrome
            || false;

        if (AudioContext) {
            this.context = new AudioContext();
            this.config.sampleRate = this.context.sampleRate;
            this.lameEncoder = new Encoder(this.config);
      
            var audio = this.config.deviceId ? { deviceId: { exact: this.config.deviceId } } : true;
      
            return new Promise(function (resolve, reject) {
              navigator.mediaDevices.getUserMedia({ audio: audio }).then(function (stream) {
                _this2.addMicrophoneListener(stream);
                resolve(stream);
              }).catch(function (err) {
                reject(err);
              });
            });
        } else {
            // Web Audio API is not supported
            // Alert the user
            alert("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox");
        }
    }
```