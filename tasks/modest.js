'use strict';

var modest = require('modest');

module.exports = function(grunt){
  
  grunt.registerMultiTask('modest', 'Commands for working with the modest templating engine.', function(){
    var params = {
      dirs : this.files[0].src
    };
    modest.compile(params);
  });
};
