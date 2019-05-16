<<<<<<< HEAD
# Proyecto en Angular 7

### Pasos a seguir para crear el proyecto (from scratch):

1. Crear un nuevo proyecto.

   ``ng new app-final --skip-tests --directory project``

   ``ng serve -o``

2. Agregar Boostrap al proyecto.
   
   ``npm i --save @ng-bootstrap/ng-bootstrap``
   
   ``npm i --save bootstrap``

3. Configurar el API Rest (dentro de la carpeta mocks) y correrlo.

   ``mkdir mocks``
   
   ``touch mocks/db.json``
   
   ``{ users: [], products: [], categories: [] }``
   
   ``json-server db.json -w`` 

4. Crear los siguiente modulos.

   ``ng generate module {module-name} --module=app``

   + shared
   + dashboard
   + sign

5. Crear los siguientes componentes y registralos en el módulo correspondientes.
   
   ``ng generate component {module-name}/{component-name} --skipTests --module={module-name}``

   + sign: login, register
   + dashboard: users, categories, products
   + shared: notification, modal

6. Revisión de los siguientes conceptos para continuar:
   + [x] Rutas
   + [x] Servicios
   + [x] Filtros
   + [x] Formularios
   + [x] Directivas
=======
# AppFinal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
>>>>>>> initial commit
