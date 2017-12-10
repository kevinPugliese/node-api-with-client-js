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

"use strict";

var gulp        = require('gulp')
    ,imagemin   = require('gulp-imagemin')
    ,clean      = require('gulp-clean')
    ,uglify     = require('gulp-uglify')
    ,usemin     = require('gulp-usemin')
    ,cssmin     = require('gulp-cssmin')
    ,sass       = require('gulp-sass')
    ,rename     = require('gulp-rename')
    ,concat     = require('gulp-concat');

var options     = {

    distCSS     : 'assets/dist/css',
    imgs        : 'assets/img/**/*',
    imgsDist    : 'assets/img',
    css         : 'assets/dist/css/*.css',
    bootstrap   : 'assets/scss/bootstrap.scss',
    nameCSS     : 'index.min.css',
    js          : 'assets/js/*.js',
    nameJs      : 'index.min.js',
    distJs      : 'assets/dist/js',
    dist        : 'assets/dist/'
};

gulp.task('default', ['clean'], function() {
    gulp.start('build-img', 'cssmin', 'scripts');
});

gulp.task('clean', function() {
    return gulp.src(options.dist)
        .pipe(clean());
});

gulp.task('build-img', function() {

    return gulp.src(options.imgs)
        .pipe(imagemin())
        .pipe(gulp.dest(options.imgsDist));
});

gulp.task('sass', function () {
    return gulp.src(options.bootstrap)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(options.distCSS));
});

gulp.task('cssmin', ['sass'],function() {
    gulp.src(options.css)
        .pipe(cssmin())
        .pipe(rename(options.nameCSS))
        .pipe(gulp.dest(options.distCSS));
});

gulp.task('scripts', function() {
    return gulp.src(options.js)
        .pipe(concat(options.nameJs))
        .pipe(uglify())
        .pipe(gulp.dest(options.distJs));
});
