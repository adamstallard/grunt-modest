'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all : {
        src : [
          "**/*.js",
          "!node_modules/**/*.js",
          "!test-src/**/*.js"
        ]
      },
      options: {
        jshintrc : ".jshintrc"
      }
    },
    vows : {
      options : {
        reporter : "spec"
      },
      all : {
        src: ['test/**/*.js']
      }
    },
    modest : {
      test1 : {
        src : ['test-src/1']
      },
      testAll : {
        src : ['test-src/**/']
      }
    }
  });

  // local tasks
  grunt.loadTasks('tasks');

  // npm tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-vows-runner');

  // default task
  grunt.registerTask('default', ['jshint', 'vows']);

};