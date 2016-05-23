module.exports = function(config) {
  config.set({
    frameworks: ['angular', 'jasmine'],
    basePath: 'app/js',
    colors: true,
    files: [
      './specs.webpack.js'
    ],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      './specs.webpack.js': ['webpack'],
      '**/*.js': ['coverage']
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
