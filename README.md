#grunt-modest

[![Build Status](https://travis-ci.org/goalzen/grunt-modest.png)](https://travis-ci.org/goalzen/grunt-modest)

Grunt task for working with the [modest templating engine](https://github.com/goalzen/modest).

###Installation

1.  Change directories to the root directory of your project.
2.  ``npm install grunt-modest``
3. Add the following line to your ``Gruntfile.js``

```javascript
grunt.loadNpmTasks('grunt-modest');
```

###Configuration

Configuration is placed in the ``grunt.initConfig`` section of your ``Gruntfile.js`` file in the ``modest`` object.

``modest`` is a [multitask](http://gruntjs.com/creating-tasks#multi-tasks).

All of the directories in the ``src`` of a target will be processed by modest (adding ``modest-preview.js`` and ``modest.js``
scripts, and compiling ``-pre`` files).  See [Basic Modest](https://github.com/goalzen/modest/wiki/Documentation#basic-modest),
 [Preparing a Directory](https://github.com/goalzen/modest/wiki/Documentation#preparing-a-directory) and [Compiling Modest
 Code](https://github.com/goalzen/modest/wiki/Documentation#compiling-modest-code).

Example:

```javascript
modest : {
  all : {
    src : ['html/**/']
  }
}
```

The foregoing example will process all the directories under the "html" directory.
