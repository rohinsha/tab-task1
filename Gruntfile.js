module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
          development: {
            options: {
              style: 'expanded'
            },
            files: {
              "css/style.css": "sass/style.scss"
            }
          },
          watch: {
          		 css: {
       				 files: ['sass/*.scss'],
        			 tasks: ['sass:dev']
      			}
          }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch')

};
