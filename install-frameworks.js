#!/usr/bin/env node
const exec = require('child_process').exec;
const frameworks = require('./frameworks');

// Loop through defined frameworks
for (let framework in frameworks){
    // Check if property exists
    if (frameworks.hasOwnProperty(framework)) {
        // Loop through all releases
        for (let index = 0, length = frameworks[framework].length; index < length; index++) {
            let release = frameworks[framework][index];

            // Check if release type is major
            if (release.type === 'major') {
                console.log(`installing ${framework}, version ${release.version} (${release.type})`);
                // Install dependency
                installDependency(framework, release.version);
            }
        }


    }
}


function installDependency(name, version) {
    exec(`npm install --save --prefix ./frameworks/${name}/${version} ${name}@${version}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}
//
// installDependency('angular', '1.6.0');
// installDependency('angular', '1.5.9');