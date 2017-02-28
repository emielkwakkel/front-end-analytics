const getSize = require('get-folder-size');
const fs = require('fs');
const path = require('path');
const dir = require('node-dir');

const basePath = './frameworks';
let frameworks = {};
getDirectories(basePath).forEach(getVersions);

function getDirectories(folder) {
    return fs.readdirSync(folder)
        .filter(file => fs.statSync(path.resolve(folder, file)).isDirectory());
}

function getVersions(framework) {
    frameworks[framework] = {};
    let frameworkPath = path.join(basePath, framework);

    getDirectories(frameworkPath)
        .forEach(version => {
            frameworks[framework][version] = {};
            let versionPath = path.join(basePath, framework, version);
            getSize(versionPath, (error, size) => {
                if (error) { throw error; }

                frameworks[framework][version].size = byteToMb(size);
                console.log(frameworks);

            });
        });
}

/**
 * Handle result of getFolderSize
 * @param {Object} error Error
 * @param {Object} size Size in bytes
 * @return {string} Size in Megabytes
 */
function getSizeCallback(error, size) {
    if (error) { throw error; }
    return byteToMb(size);
}

function byteToMb(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' Mb'; // Size is in bytes
}