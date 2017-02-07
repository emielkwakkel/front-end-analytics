1. Install frameworks
npm install --save --prefix ./frameworks/angular angular
npm install --save --prefix ./frameworks/react react
npm install --save --prefix ./frameworks/polymer polymer

2. Get folder sizes
/node_modules/get-folder-size/bin/get-folder-size --folder=./frameworks/angular/node_modules
/node_modules/get-folder-size/bin/get-folder-size --folder=./frameworks/react/node_modules
/node_modules/get-folder-size/bin/get-folder-size --folder=./frameworks/polymer/node_modules
