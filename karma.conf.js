module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['browserify', 'jasmine'],
		files: [
      'file-downloader.js',
      'test.js'
		],
		exclude: [],
    preprocessors: {
      'test.js': [ 'browserify' ],
      './node_modules/fake-fetch/index.js': [ 'browserify' ]
    },
		coverageReporter: {},
		reporters: ['mocha'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
    browsers: ['Chrome'],
		plugins: [
			'karma-phantomjs-launcher',
			'karma-chrome-launcher',
			'karma-mocha-reporter',
			'karma-jasmine',
      'karma-browserify'
		],
		singleRun: true
	});
};
