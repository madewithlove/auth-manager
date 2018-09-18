var config = require('madewithlove-webpack-config').packages;

module.exports = config({
    libraryName: 'AuthManager',
}).merge({
    entry: './src/AuthManager',
    externals: {
        moment: true,
        'react-cookie': true,
    },
});
