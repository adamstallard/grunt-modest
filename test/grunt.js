'use strict';

var exec = require('child_process').exec;
var fs = require('fs');
var util = require('util');
var assert = require('assert');

var _ = require('underscore');
var vows = require('vows');
var expect = require('chai').expect;


var testDirs = ['test-src/1', 'test-src/2', 'test-src/3'];
var setupTopics = {};

_.each(testDirs, function(d){
  var outFile = d + '/test.html';
    setupTopics['deleting output file, "' + outFile + '"'] = {
      topic : function(){
        fs.unlink(outFile, this.callback);
      },
      "should result in the file being gone from the directory" : function(error, dummy){
        expect(fs.readdirSync(d)).to.not.contain(outFile);
      }
    };
});

vows.describe('grunt-modest')
.addBatch({
  "Setup: " : setupTopics
})
.addBatch({
  "Running grunt modest:test1" : {
    topic : function(){
      exec('grunt modest:test1 --verbose --debug 9', this.callback);
    },
    "should have produced the file test-src/1/test.html" : function(error, stdout){
      util.print(stdout);
      assert.ifError(error);
      expect(fs.readdirSync('test-src/1')).to.contain('test.html');
    }
  }
})
.addBatch({
  "Running grunt modest:testAll" : {
    topic : function(){
      exec('grunt modest:testAll --verbose --debug 9', this.callback);
    },
    "should have produced the file test-src/2/test.html" : function(error, stdout){
      util.print(stdout);
      assert.ifError(error);
      expect(fs.readdirSync('test-src/2')).to.contain('test.html');
      expect(fs.readdirSync('test-src/3')).to.contain('test.html');
    }
  }
})
.export(module);

