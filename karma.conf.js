var path = require('path');
module.exports = function(config) {
  config.set({
    frameworks: ['angular', 'jasmine'],
    basePath: 'app/js',
    colors: true,
    files: [
      './specs.webpack.js'
    ],
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      './specs.webpack.js': ['webpack']
    },
    webpack: {
        module: {
            preLoaders: [
                // instrument only testing sources with Istanbul
                {
                    test: /\.js$/,
                    include: path.resolve('app/js/'),
                    exclude: /(spec)/,
                    loader: 'istanbul-instrumenter'
                }
            ]
        }
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    }
  })
}
