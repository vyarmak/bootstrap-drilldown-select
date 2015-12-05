'use strict';

module.exports = function(grunt) {
  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    year: grunt.template.today('yyyy'),
    less: {
      core: {
        options: {
          sourceMap: true,
          sourceMapURL: '<%= pkg.name %>.css.map',
          outputSourceFiles: true
        },
        src: 'less/<%= pkg.name %>.less',
        dest: 'css/<%= pkg.name %>.css'
      }
    },
    cssmin: {
      core: {
        options: {
          compatibility: 'ie9',
          sourceMap: true
        },
        expand: true,
        src: 'css/*.css',
        ext: '.min.css'
      }
    },
    uglify: {
      core: {
        expand: true,
        src: 'js/*.js',
        ext: '.min.js'
      }
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies'
  });

  grunt.registerTask('default', [
    'less',
    'cssmin',
    'uglify'
  ]);
};
