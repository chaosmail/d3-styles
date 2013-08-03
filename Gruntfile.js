var banner = '/** <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today() %>\n' +
             ' *  (c) 2013 Christoph Körner, office@chaosmail.at, http://chaosmail.at\n' +
             ' *  License: MIT\n' +
             ' */\n';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: {
        src: ["dist/", "demo/js"]
      }
    },
    concat: {
      options: {
        stripBanners: true,
        banner: banner
      },
      js: {
        src: ['src/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: banner
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['dist/*.js']
        }
      }
    },
    copy: {
      demo: {
          files: {
              'demo/js/<%= pkg.name %>.js': 'dist/<%= pkg.name %>.js',
              'demo/js/<%= pkg.name %>.min.js': 'dist/<%= pkg.name %>.min.js'
          }
      },
      libs: {
        files: {
            'demo/lib/d3.js': 'components/d3/d3.js',
            'demo/lib/d3.min.js': 'components/d3/d3.min.js'
        }
      },
      def: {
        files: {
            'dist/<%= pkg.name %>.d.ts': 'src/<%= pkg.name %>.d.ts'
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['default']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['clean:dist', 'concat', 'uglify', 'copy']);
};