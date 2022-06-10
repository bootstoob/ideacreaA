# IdeacreaA

//--GIT--
git init
git remote add origin https://github.com/bootstoob/ideacreaA.git
//antes de empezar a programar hacer el pull, por si la rama ha sido modificada
git pull origin master
git status 
git add .
git commit -m "subida final"
//subir
git push origin master

git init
git remote add origin https://github.com/bootstoob/ideacreaL.git
git pull origin master
git status 
git add .
git commit -m "subida final"
git push origin master --force

//SALIR
:qa


//ABRE EL XAMPP !!!
cd/..
cd VSCode-win32-x64-1.51.1
Code.exe

cd/..
cd xampp
xampp-control.exe

cd/..
cd xampp\htdocs\ideacreaA
ng serve

cd/..
cd xampp\htdocs\ideacreaL
php artisan serve


	ng new ideacreaA 
	npm install -g npm@latest
	npm install -g @angular/cli
	Set-ExecutionPolicy Unrestricted
//Y seleccionar: YES

	composer create-project –-prefer-dist laravel/laravel ideacreaL
	install passport --force
//instalar sinphony
	composer require symfony/finder


//	- limpiar caches, sobre todo cuando trabajemos con las rutas en api.php
php artisan cache:clear
php artisan route:cache
php artisan view:clear
php artisan route:clear

composer dumpautoload

//información sobre las rutas
php artisan route:list

//limpiar caché de node, angular
npm cache clean --force
//compilación modo develop
ng build

composer dump-autoload
//para ver si la clase está reconocida
php artisan tinker
//para que funcione, BINDear una clase custom
php artisan make:privider ...nombre

//SALVADA DE BUYATE, fallo de rutas con middleware, tras borrar routes-v7 de bootstrap
composer dumpautoload
//---Flush the application cache
php artisan cache:clear
//---Remove the configuration cache file
php artisan config:cache
php artisan config:clear
//---Remove Routes Cache
php artisan route:clear


ng update @angular/core @angular/cli
npm uninstall @angular-devkit/build-angular
npm install --save-dev @angular-devkit/build-angular

	composer require laravel/passport -
	php artisan passport:install --force
	
//La Base de Datos se llama:
ideacrea_db
//enganchar BD enel arichivo .env
DB_DATABASE=ideacrea_db

php artisan make:model categorias -fcms||-a -m
php artisan make:model subcategorias -fcms||-a
php artisan make:model usuarios -fcms||-a
php artisan make:model anuncios -fcms||-a
php artisan make:model comentarios -fcms||-a
php artisan make:model contactos -fcms||-a
php artisan make:model imgs_anuncios -fcms||-a
php artisan make:model crear_anuncio -fcms||-a
	
	
//rellenar DB
composer require fakerphp/faker

//primero ordenar las migrations y definir los campos de las tablas en los factories y migrations...

php artisan db:seed
//ejecutar seeders para rellenar
	php artisan migrate 
php artisan db:seed --class=categoriaSeeder
php artisan db:seed --class=subcategoriaSeeder
php artisan db:seed --class=usuarioSeeder
php artisan db:seed --class=anuncioSeeder
php artisan db:seed --class=comentarioSeeder
php artisan db:seed --class=contactoSeeder
	php artisan passport:install



php artisan make:controller categoriasController
php artisan make:controller subcategoriasController
php artisan make:controller usuariosController
php artisan make:controller comentariosController
php artisan make:controller contactosController
php artisan make:controller RegistroController
php artisan make:controller AccesoController
	php artisan make:controller CrearAnuncioController


//generar la URL de Laravel: api.php

ng generate component categorias/
ng generate component subcategorias/
ng generate component anuncios/
ng generate component comentarios/
ng generate component contactos/
ng generate component usuarios/
ng generate component iconos/
ng generate component registro/
ng generate component crearanuncio/

ng generate component administracion/
ng generate component home/
ng generate component navbar/
ng generate component footer/
ng generate component acceso/
ng generate component cerrarSesion/
ng generate component modelos/Anuncio/
ng generate component modelos/Categoria/
ng generate component modelos/Subcategoria/
	ng generate component modelos/Usuario/

ng generate service administracion/
ng generate service servicios/acceso
ng generate service servicios/crearanuncio
ng generate service servicios/inicio-categorias
ng generate service servicios/salir
ng generate service servicios/subcategorias

//instalar passport
php artisan passport:install
//dependencias de symfony
composer require symfony/routing
php artisan make:middleware Administracion
	-remove -rf bootstrap/cache/*
	
//SALVADA DE BUYATE 2, dropdown de bootstrap
npm install jquery -- save
npm install bootstrap jquery @popperjs/core
//angularfix.com/.../bootstrap-dropdown...
npm install popper.js --save
npm install bootstrap@next --save
