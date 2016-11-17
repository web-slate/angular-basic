var gulp = require('gulp'),
    concat = require('gulp-concat'),
    templateCache = require('gulp-angular-templatecache');

gulp.task('concat', function () {
    return gulp.src([
        'app/components/jquery/dist/jquery.min.js',
        'app/components/bootstrap/dist/js/bootstrap.min.js',
        'app/components/angular/angular.js',
				'app/components/angular-route/angular-route.js',
        'app/components/angular-translate/angular-translate.min.js',
				'app/components/angular-translate-loader-partial/angular-translate-loader-partial.min.js'
    ])
        .pipe(concat('vendor-library.js'))
        .pipe(gulp.dest('./build/js/'));

    // CSS File
    gulp.src('app/components/bootstrap/dist/css/bootstrap.min.css')
        .pipe(concat('vendor-library.css'))
        .pipe(gulp.dest('./build/css/'));

    gulp.src('app/components/bootstrap/dist/css/bootstrap.min.css.map')
        .pipe(concat('bootstrap.min.css.map'))
        .pipe(gulp.dest('./build/css/'));

    // App Files
    gulp.src([
        'app/js/app.js',

        // Angular Components
        'app/js/shared/ngComponents/common/navBar.js',
        'app/js/shared/ngComponents/common/banner.js',

        // Angular Directives
        'app/js/shared/ngDirectives/form/inputBox.js',
        'app/js/shared/ngDirectives/form/submitButton.js',

        // App Files.
        'app/js/ngTemplates.js',
        'app/js/lookUp/lookUp.js'
    ])
        .pipe(concat('basic-app.js'))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('ngtemplates', function () {
    return gulp.src('app/js/**/*.html')
        .pipe(templateCache('ngTemplates.js', {
            root: "app/js",
            module: 'angular-basic',
            standalone: true
        }))
        .pipe(gulp.dest('./app/js/'))
});

gulp.task('build', ['ngtemplates', 'concat'])
