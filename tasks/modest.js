'use strict';

var modest = require('modest');

module.exports = function(grunt){
  grunt.registerMultiTask('modest', 'Process directories using the modest templating engine.', function(){
    var params = {
      dirs : this.filesSrc,
      callback : this.async()
    };
    modest.compile(params);
  });
};
