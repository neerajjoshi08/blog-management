# Blog Management
This project is angular based project that provide the blog management like creating, editing, deleting, and reading the blogs.

Various components are being declared:
* [App (Root)](#app-component)
* [Blog](#blog-component)
* [Blog new](#blog-new-component)
* [Blog read/edit](#blog-read/edit-component)
* [Blog Delete](#blog-delete-component)

## App Component
This is the root component that provides the different component to route themselves over it.

## Blog Component
This is the nested component of App component that provides listing of blogs. And hence provide the functionality of creating a blog, deleting a block, and reading/editing a blog.

## Blog new Component
This is the nested component of Blog component that provides the functionality of creating a new blog.

## Blog read/edit Component
This is the nested component of Blog component that provides the functionality of reading/editing a blog.

## Blog delete Component
This is the nested component of Blog component that provides the functionality of deleting a blog.

## Others
Different services classes are defined for providing the services like API calling/consumption [refer](./Backend-express/), and for storing blog data.

___

## Screenshots:
1. Main Page
![alt text](./screenshots/main.PNG?raw=true")

2. Create a new blog
![alt text](./screenshots/new-blog.PNG?raw=true")

3. Edit a blog
![alt text](./screenshots/edit-blog.PNG?raw=true")

4. Blog list
![alt text](./screenshots/list-of-blogs.PNG?raw=true")

5. Delete a blog
![alt text](./screenshots/blog-delete.PNG?raw=true")

5. Final list of blogs
![alt text](./screenshots/final-list-of-blogs.PNG?raw=true")
___

## For running the project (Default notes from Angular)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running Express server for API Calls
Go to directory: `Backend-express` [Click Here](./Backend-express/), and run the command: `npm start` to run the server. 

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
