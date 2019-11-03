module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "mocha",
    transpilers: [],
    testFramework: "mocha",
    coverageAnalysis: "perTest",
    mochaOptions: {
      spec: ['test/**/index.test.js']
    },
    mutate: ['src/**/*.js', '!src/index.js', '!src/db.js'],
    mutator: {
      name: 'javascript',
      excludedMutations: ['StringLiteral']
    }
  });
};
