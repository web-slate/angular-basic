module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            basic: {
                src: [
                        'app/components/jquery/dist/jquery.min.js',
                        'app/components/bootstrap/dist/js/bootstrap.min.js',
                        'app/components/angular/angular.js',
												'app/components/angular-route/angular-route.js',
												'app/components/angular-translate/angular-translate.min.js',
                        'app/components/angular-translate-loader-partial/angular-translate-loader-partial.min.js'
                     ],
                dest: './build/js/vendor-library.js'
            },
            bootstrapMap: {
                src: ['app/components/bootstrap/dist/css/bootstrap.min.css.map'],
                dest: './build/css/bootstrap.min.css.map'
            },
            css: {
                src: ['app/components/bootstrap/dist/css/bootstrap.min.css'],
                dest: './build/css/vendor-library.css'
            },
            app: {
                src: [
                        'app/js/app.js',

                        // Angular Components
                        'app/js/shared/ngComponents/common/navBar.js',
                        'app/js/shared/ngComponents/common/banner.js',

                        // Angular Directives
                        'app/js/shared/ngDirectives/form/inputBox.js',
                        'app/js/shared/ngDirectives/form/submitButton.js',

                        // App Files.
                        'app/js/ngTemplates.js',
                        'app/js/lookUp/lookUp.js',
                     ],
                dest: './build/js/basic-app.js'
            }
        },
        ngtemplates:  {
            "angular-basic": {
                cwd: '',
                src: 'app/js/**/*.html',
                dest: './app/js/ngTemplates.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('build', [ 'ngtemplates', 'concat' ]);
};
