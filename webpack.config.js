var config = require('madewithlove-webpack-config').packages;

module.exports = config({
    libraryName: 'AuthManager',
}).merge({
    externals: {
        'moment': true,
        'react-cookie': true,
    },
});
