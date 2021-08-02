# Hosting URL: https://whatsapp-clone-july-2021.web.app

# Getting Started with Create React App

Colors used
#EAE7DC > #D8C3A5 > #8E8D8A > #E98074 > #E85A4F

#5CDB95 > #8EE4AF > #379683 > #EDF5E1 > #05386B

#FBE8A6 > #F4976C > #303C6C > #B4DFE5 > #D2FDFF

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

# css light red-skin color :

```JavaScript
.login {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: #eae7dc;
  /* background: linear-gradient(#141e30, #243b55); */
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  position: relative;
}

.login__container {
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 40px;
  margin: 0 auto;
  text-align: center;
  background-color: #d8c3a5;
  /* background: rgba(0, 0, 0, 0.5); */
  box-sizing: border-box;
  box-shadow: 24px 54px 25px 0px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login__container > button {
  color: #fff;
  background-color: #e85a4f;
  /* background: rgba(0, 0, 0, 0.5); */
  font-weight: 700;
}
.login__container > button:hover {
  background-color: #e98074;
}

.login__text {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #ba925b;
}

p {
  color: #a2783c;
}

.welcome__text {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #ba925b;
}

form {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 10px;
}

form > label {
  font-family: Arial, Helvetica, sans-serif;
  margin-right: auto;
  margin-top: 20px;
  color: #a2783c;
}

form > input {
  width: 100%;
  height: 32px;
  outline: none;
  padding: 4px;
  border: none;
  border-radius: 7px;
}

.form > button {
  /* color: #fff; */

  /* background: rgba(0, 0, 0, 0.5); */
  background-color: #e85a4f;
  border: none;
  outline: none;
  margin-top: 20px;
  font-weight: 700;
  border-radius: 5px;
}
.form > button:hover {
  background-color: #e98074;
}

```

#color green

```JavaScript
    .login {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: #5cdb95;
  /* background: linear-gradient(#141e30, #243b55); */
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  position: relative;
}

.login__container {
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 40px;
  margin: 0 auto;
  text-align: center;
  background-color: #8ee4af;
  /* background: rgba(0, 0, 0, 0.5); */
  box-sizing: border-box;
  box-shadow: 24px 54px 25px 0px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login__container > button {
  color: #fff;
  background-color: #05386b;
  /* background: rgba(0, 0, 0, 0.5); */
  font-weight: 700;
}
.login__container > button:hover {
  background-color: #4c7eb0;
}

.login__text {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #379683;
}

p {
  color: #379683;
}

.welcome__text {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #ba925b;
}

form {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 10px;
}

form > label {
  font-family: Arial, Helvetica, sans-serif;
  margin-right: auto;
  margin-top: 20px;
  color: #379683;
}

form > input {
  background-color: #edf5e1;
  width: 100%;
  height: 32px;
  outline: none;
  padding: 4px;
  border: none;
  border-radius: 7px;
}

.form > button {
  /* color: #fff; */

  /* background: rgba(0, 0, 0, 0.5); */
  background-color: #05386b;
  border: none;
  outline: none;
  margin-top: 20px;
  font-weight: 700;
  border-radius: 5px;
}
.form > button:hover {
  background-color: #4c7eb0;
}

```
