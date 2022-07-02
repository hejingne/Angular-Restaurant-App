# Angular Restaurant App
This application helps the restaurant owner to manage its stable of menu items. It contains common features that can be found in any data-driven apps. The final version acquires and displays a list of items, edits a selected item's detail and navigates among different views of item data.\
The application makes requests and receives simulated responses from ```HttpClient``` via in-memory Web API and data store.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

# Angular concepts used in this application
- Use built-in Angular directives to show and hide elements and display lists of item data
- Create Angular components to display item details and show an array of items
- Use one-way data binding for read-only data
- Add editable fields to update a model with two-way data binding
- Bind component methods to user events, like keystrokes and clicks
- Enable users to select a item from a list and edit that item in the details view
- Format data with pipes
- Create a shared service to assemble the items
- Use Angular Dependency Injection System to inject service classes into components to decouple data access logic and data presentation logic
- Use routing to navigate among different views and their components by declaring a separate, top-level module dedicated to routing
- Add data persistence features using Angular's HttpClient mechanism

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
