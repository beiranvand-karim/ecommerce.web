# Online Commerce Project

This is an assessment project for an online commerce company.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Run in development mode

follow the bullet point detailed below to run project in development mode.

- Install the latest release of `Node.js`.
- Clone project using `git` version control.
- Install packages using command in terminal `yarn install`.
- Create a `.env` file in the root directory of the project. Copy the environment variables from the `.env.example`.
  Make necessary change to the environment variables based on the environment.
- Load environment variables into the `index.html` by running command `yarn react-env` in terminal.
- Then run command in terminal `yarn start`.
- Run browser with disabled `CORS`. for example here's the command to do it in a MAC computer: `open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security`