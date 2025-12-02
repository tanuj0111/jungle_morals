# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




/* -------------- Desktop Fixed Layout (1025px - 1920px range stays same) -------------- */
@media (min-width: 1025px) and (max-width: 1920px) {

  .sceneWrapper {
    width: 100vw; /* 100% screen width */
    margin: 0 auto;
    position: relative;
  }

  /* MONKEY BOARD (CENTERED + RESPONSIVE WIDTH) */
  .monkeyBoard {
    position: absolute;
    top: -12vh;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
  }

  .monkeyBoard img {
    width: 75vw;  /* responsive */
    max-width: 1350px; 
  }

  /* TREES LEFT AND RIGHT RESPONSIVE */
  .tree1 {
    height: 60vw;   /* responsive scaling */
    max-height: 1226px;
    margin-left: -15vw;
  }

  .tree2 {
    height: 58vw;
    max-height: 1188px;
    margin-right: -39vw;
    transform: translateX(-50%);
  }

  /* BUTTON ICON RESPONSIVE */
  .monkeybutton img {
    height: 2vw;
    width: 2vw;
    min-width: 30px;
    min-height: 30px;
  }

  .monkeybutton {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -7vh;
  padding-left: 2vh;
  padding-right: 2vh;

}


  .Board {
    position: absolute;
    top: 37vh;        /* responsive vertical alignment */
    left: 50vw;       /* always center */
    transform: translateX(-50%);
    z-index: 25;
  }

  /* 🪵 Main Board Image */
  .Board img {
    width: clamp(500px, 50vw, 1200px);
    height: auto;
  }

  /* 🐦 Bird Sitting On Board */
  .Birdonboard {
    position: absolute;
    top: -4vh;
    left: 15vw;    /* use vw for responsive scaling */
    transform: translateX(-50%);
    z-index: 30;
  }

  .Birdonboard img {
    width: clamp(60px, 6vw, 150px);
    height: auto;
  }

  /* 🟡 Small Bird Button */
  .Boardbtn {
    position: absolute;
    top: 8vh;
    left: -3vw;
    transform: translateX(-50%);
    z-index: 40;
  }

  .Boardbtn img {
    width: clamp(25px, 1.4vw, 55px);
    height: auto;
  }

  /* 🐘 Elephant Button */
  .Elephantbtn {
    position: absolute;
    top: 50vh;
    left: 18vw;
    transform: translateX(-50%);
    z-index: 40;
  }

  .Elephantbtn img {
    width: clamp(30px, 2.5vw, 120px);
    height: auto;
  }


.animals {
    position: absolute;
    top: 38vh; /* responsive position */
    left: 6vw;
    display: flex;
    align-items: flex-end;
    z-index: 40;
  }

  /* Main Animals Image */
  .animals img {
    width: clamp(400px, 45vw, 950px);
    height: auto;
  }

  /* COMMON BUTTON STYLE */
  .animals [class*="animalbtn"] img {
    width: clamp(25px, 1.8vw, 55px);
    height: auto;
  }

  /* BUTTON POSITIONS (Only vw/vh for scaling) */

  .animalbtn1 {
    position: absolute;
    top: 28vh;
    left: 18vw;
    transform: translate(-50%);
    z-index: 50;
  }

  .animalbtn2 {
    position: absolute;
    top: 27vh;
    left: 30vw;
    transform: translate(-50%);
    z-index: 50;
  }

  .animalbtn3 {
    position: absolute;
    top: 36vh;
    left: 10vw;
    transform: translate(-50%);
    z-index: 50;
  }

  .animalbtn4 {
    position: absolute;
    top: 38vh;
    left: 26vw;
    transform: translate(-50%);
    z-index: 50;
  }



   .wall_tree {
    position: absolute;
    top: calc(69vw * (100vw / 1920));
    display: flex;
    align-items: flex-end;
    gap: calc(20vw * (100vw / 1920));
    z-index: 35;
  }

  .wall {
    position: absolute;
    top: calc(3.7vh * (100vw / 1920));
    left: calc(31vh * (100vw / 1920));
    transform: translateX(-50%);
    z-index: 25;
  }

  .wall img {
    height: calc(62vh * (100vw / 1920));
    width: auto;
  }

  .Birdonwall {
    position: absolute;
    top: calc(-7.5vh * (100vw / 1920));
    left: calc(37vh * (100vw / 1920));
    transform: translateX(-50%);
    z-index: 25;
  }

  .Birdonwall img {
    width: calc(9vw * (100vw / 1920));
    max-width: 120px;
  }

  .wallbtn, 
  .Wallanimalbtn1,
  .Wallanimalbtn2 {
    position: absolute;
    transform: translateX(-50%);
    z-index: 25;
  }

  .wallbtn {
    top: calc(3vh * (100vw / 1920));
    left: calc(-2vh * (100vw / 1920));
  }

  .wallbtn img {
    width: calc(1.5vw * (100vw / 1920));
    max-width: 60px;
  }

  .Wallanimalbtn1 {
    top: calc(58vh * (100vw / 1920));
    left: calc(26vh * (100vw / 1920));
  }

  .Wallanimalbtn1 img {
    width: calc(2vw * (100vw / 1920));
    max-width: 60px;
  }

  .Wallanimalbtn2 {
    top: calc(67vh * (100vw / 1920));
    left: calc(38vh * (100vw / 1920));
  }

  .Wallanimalbtn2 img {
    width: calc(2vw * (100vw / 1920));
    max-width: 60px;
  }


  /* TREE AREA */
  .treewithanimal {
    position: absolute;
    top: calc(-50vh * (100vw / 1920));
    left: calc(155vh * (100vw / 1920));
    transform: translateX(-50%);
    z-index: 25;
  }

  .treewithanimal img {
    height: calc(118vh * (100vw / 1920));
    width: auto;
  }

  .treeanimalbtn2 {
    position: absolute;
    top: calc(47vh * (100vw / 1920));
    left: calc(85vh * (100vw / 1920));
    transform: translateX(-50%);
  }

  .treeanimalbtn2 img {
    width: calc(1.7vw * (100vw / 1920));
    max-width: 60px;
  }

  .treeanimalbtn1 {
    position: absolute;
    top: calc(80vh * (100vw / 1920));
    left: calc(60vh * (100vw / 1920));
    transform: translateX(-50%);
  }

  .treeanimalbtn1 img {
    width: calc(1.7vw * (100vw / 1920));
    max-width: 60px;
  }


}



/* Ultra Wide Screens */
@media (min-width: 1921px) {
  body {
    max-width: 1440px;
    margin: auto;
  }
}