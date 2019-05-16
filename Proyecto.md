# Proyecto en Angular 7

### Pasos a seguir para crear el proyecto final:

1. Crear un nuevo proyecto.

   ``ng new app-final --skip-tests --directory project``

   ``cd project``

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
   + shared: notification, modal-confirm

6. Revisión de los siguientes conceptos para continuar:
   + [ ] Rutas
   + [ ] Servicios
   + [ ] Filtros
   + [ ] Formularios
   + [ ] Directivas