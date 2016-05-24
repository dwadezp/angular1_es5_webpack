exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['test/e2e/*.spec.e2e.js'],

    suites: {
        suite1: 'spec/suite1/*.spec.js',
        suite2: 'spec/suite2/*.spec.js'
    },

    baseURL: 'http://localhost:8080/',
    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true
    }
};
