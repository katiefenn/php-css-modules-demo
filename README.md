# PHP / PostCSS CSS Modules Demo
A demonstration of CSS Modules on a PHP platform, by Katie Fenn.

# Installation
## Pre-requisites
- Node.JS
- npm
- gulp-cli
- Virtual box
- Vagrant

## Build development VM
This demo uses Vagrant to build a local development VM. To build the VM, run the following command in the project root folder:
```
vagrant up
```

## Install PHP dependencies
Plates is used to make HTML templating nice and easy. It's installed using the PHP package manager, Composer. Install composer by following [the instructions on getcomposer.org](https://getcomposer.org/download/) in the project root folder.

When that's done, run the following command in the project root folder:
```
./composer.phar install
```

## Install frontend dependencies
To install PostCSS, Gulp and the plugins used for this demo, run the following in the project root folder:
```
npm install
```

## Build frontend assets
Build static CSS files from source by running Gulp in the project root folder:
```
gulp
```

# Development site
If everything has worked, the development site should be available at [http://192.168.56.101/](http://192.168.56.101/)
