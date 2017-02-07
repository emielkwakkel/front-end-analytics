var getSize = require('get-folder-size');

let frameworks = {
    angular: {
        name: 'AngularJS',
        version: '123',
        numberOfNodes: 1, //getNodes()
        size: getFolderSize('./frameworks/angular/node_modules')
    },
    react: {
        name: 'React',
        version: '12',
        numberOfNodes: 3, //getNodes()
        size: getFolderSize('./frameworks/react/node_modules')
    }
};


var angularSize = getFolderSize('./frameworks/angular/node_modules');

/**
 * Get Folder Size
 * @param {string} folder Location to calculate the folder size of
 * @return {*} Error or size in Megabytes.
 */
function getFolderSize(folder) {
    return getSize(folder, getFolderSizeCallback);
}

/**
 * Handle result of getFolderSize
 * @param {Object} error Error
 * @param {Object} size Size in bytes
 * @return {string} Size in Megabytes
 */
function getFolderSizeCallback(error, size) {
    if (error) { throw error; }
    return (size / 1024 / 1024).toFixed(2) + ' Mb'; // Size is in bytes
}

