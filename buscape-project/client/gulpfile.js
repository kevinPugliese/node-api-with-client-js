// *************************************
//
//   Gulpfile
//
// *************************************
//
// Available tasks:
//   `gulp`
//   `gulp clean`
//   `gulp copy`
//   `gulp build-img`
//   `gulp sass`
//   `gulp usemin`
//
// *************************************

var gulp        = require('gulp')
    ,imagemin   = require('gulp-imagemin')
    ,clean      = require('gulp-clean')
    ,uglify     = require('gulp-uglify')
    ,usemin     = require('gulp-usemin')
    ,cssmin     = require('gulp-cssmin')
    ,sass       = require('gulp-sass');


var options     = {

    dist        : 'dist',
    imgs        : 'dist/assets/img/**/*',
    imgsDist    : 'dist/assets/img',
    src         : 'src/**/*',
    bootstrap   : 'dist/assets/scss/bootstrap.scss',
    scss        : 'dist/assets/scss/',
    html        : 'dist/**/*.html'
};

console.log(options.imgs);

gulp.task('default', ['copy'], function() {
    gulp.start('build-img', 'usemin');
});

gulp.task('clean', function() {
    return gulp.src(options.dist)
        .pipe(clean());
});

gulp.task('copy', ['clean'], function() {
    return gulp.src(options.src)
        .pipe(gulp.dest(options.dist));
});

gulp.task('build-img', function() {

    return gulp.src(options.imgs)
        .pipe(imagemin())
        .pipe(gulp.dest(options.imgsDist));
});

gulp.task('sass', function () {
    return gulp.src(options.bootstrap)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(options.scss));
});

gulp.task('usemin', ['sass'],function() {
    return gulp.src(options.html)
        .pipe(usemin({
            js: [uglify],
            css: [cssmin]
        }))
        .pipe(gulp.dest(options.dist));
});
