/* jshint node: true */
/* global module */

module.exports = function(grunt) {
  grunt.initConfig({
    // Templates
    projectName: "base-layer",

    // Watch tasks
    watch: {
      css: {
        files: './build/sass/**/*.scss',
        tasks: ['sass']
      },
      scripts: {
        files: './build/js/**/*.js',
        tasks: ['jshint', 'preprocess:js']
      },
      html: {
        files: './build/**/*.html',
        tasks: ['preprocess:html']
      },
      another: {
        files: [
          './build/images/**/*.gif',
          './build/images/**/*.jpg',
          './build/images/**/*.svg'
        ],
        tasks: ['clean:images', 'copy:images']
      }
    },

    // Compile Sass
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          './dist/css/<%= projectName %>.css': './build/sass/styles.scss'
        }
      }
    },

    // PostCSS for autoprefixer
    postcss: {
      dist: {
        options: {
          map: {
            inline: false,
          },
          processors: [
            require('autoprefixer')({browsers: 'last 2 versions'})
          ]
        },
        src: './dist/css/<%= projectName %>.css'
      },
      production: {
        options: {
          map: false,
          processors: [
            require('autoprefixer')({browsers: 'last 2 versions'}),
            require('cssnano')({ zindex: false })
          ]
        },
        src: './dist/css/<%= projectName %>.css'
      }
    },

    // Preprocess html (has includes) and js
    preprocess: {
      options: {
        context: {
          DEBUG: true
        }
      },
      html: {
        files: {
          './dist/index.html': './build/index.html',
          './dist/fr.html': './build/fr.html',
          './dist/de.html': './build/de.html',
          './dist/fr-ca.html': './build/fr-ca.html',
          './dist/sh.html': './build/sh.html'
        }
      },
      js: {
        files: {
          './dist/js/<%= projectName %>.js': './build/js/scripts.js'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: true,
      },
      files: ['gruntfile.js', 'build/js/*.js']
    },

    uglify: {
      production: {
        files: {
          './dist/js/<%= projectName %>.min.js': './dist/js/<%= projectName %>.js'
        }
      }
    },

    // Clean out image folder
    clean: {
      images: [ './dist/images/' ],
      all: [ './dist/' ]
    },

    // Move Images to build
    copy: {
      starter: {
        files: [{
          expand: true,
          cwd: './build/',
          src: 'on/**',
          dest: './dist/'
        }]
      },
      images: {
        files: [{
          expand: true,
          cwd: './build/',
          src: 'images/**',
          dest: './dist/'
        }]
      },
      jsincludes: {
        files: [{
          expand: true,
          cwd: './build/',
          src: 'js/inc/**',
          dest: './dist/js/',
          flatten: true,
          filter: 'isFile'
        }]
      }
    },

    // BrowserSync server build
    browserSync: {
      bsFiles: {
        src : [
          'dist/css/*.css',
          'dist/js/*.js',
          'dist/images/**/*',
          'dist/**/*.html'
        ]
      },
      options: {
        notify: false,
        port: 5080,
        server: {
          baseDir: 'dist/'
        },
        watchTask: true
      }
    },
    bsReload: {
      css: {
          reload: 'dist/css/<%= projectName %>.css'
      },
      all: {
          reload: true
      }
    }
  });

  // Load necessary modules
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-shell');

  // Rebuild Task
  grunt.registerTask('rebuild', ['clean:all', 'sass', 'postcss:dist', 'preprocess','copy:starter', 'copy:images', 'copy:jsincludes']);

  // Production Build
  grunt.registerTask('production', ['rebuild', 'postcss:production', 'uglify:production' ]);

  // Standard Tasks
  grunt.registerTask('build', [ 'sass', 'postcss', 'jshint', 'preprocess', 'clean:images', 'copy:starter', 'copy:images', 'copy:jsincludes' ]);
  grunt.registerTask('default', [ 'build', 'browserSync', 'watch' ]);
};
