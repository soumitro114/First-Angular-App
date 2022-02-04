This is my first angular project. I used this video (https://www.youtube.com/watch?v=3dHNOWTI7H8) as my introduction to angular and to create this project by following the video.

# Using the local backend

Use `npm install -g json-server` to install JSON server if it isnt already installed.
Use `npm run server` to initialize the local database. Use a seperate terminal to simultaneously run this and `ng serve` for the app to work
The `db.json` file is used as the database. It is being run on port 5000. The database file and port can be changed by changing the script in `package.json`.
To view the task database in the browser, go to `localhost:5000/tasks`

# Functions
1) Adding, Deleting and viewing tasks.
2) Double clicking on tasks to set their reminder on or off (currently visual effect only)
---

# First-Angular-App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
