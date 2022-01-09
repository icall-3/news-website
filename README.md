# News Website

### The most useful news website ever

### YOU CAN FORGET ABOUT NEW YORK TIMES

You get all your up-to-date news from the newsapi.org service.  
Will update with future features.

# Technical details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

To run this project you will need to have [Node.js](https://nodejs.org/en/) installed on your computer (version 14 or above). The Node Package Manager (NPM) should install itself together with Node.js.

To make sure everything is installed correctly open a command line interface in your operating system and check the Node version by running `node -v`, and for the NPM `npm --v` commands. You should see for both commands the installed version number in the command line.

To install the exact version of Angular run the `npm install -g @angular/cli@13.0.1` command.

To check if the installation succeded run the `ng version` command.

After cloning the project make sure to install all the node modules in the correct directory by running the `npm install` command in the parent folder of the source code (where you can find the .angular folder).

To run this project navigate with a CLI of your choice into the parent folder of the source code and run the `npm run start` command.

Navigate to `http://localhost:4200/` in a browser of your choice. The app will automatically reload if you change any of the source files.

# Unit testing

Unit testing and task runner are added by default to an Angular project.
By default, the tests are executed in Chrome and you can run them with `ng test`.  
In order to run the tests in Firefox (or in any other browser) you need to install the dependencies for karma task runner with `npm install karma-firefox-launcher --save-dev` (for other browser replace the browser name). Once you installed it, add Firefox to the browser list in the `karma.conf.js` file so you will have for the plugins `require("karma-firefox-launcher")`, and `browsers: ["Chrome", "Firefox"]`, and then simply run the test with `ng test`.  
Of course, for this you will need to have Firefox installed on your computer.

# Documentation

In order to generate technical documentation we will use the [Compodoc](https://compodoc.app/) tool. To install it, you need to run the `npm install --save-dev @compodoc/compodoc` command in the parent folder of the project. After the installation is complete, just run the `npm run compodoc` command and access `http://127.0.0.1:8080/` in a browser of your choice, where you can find the generated documentation.
