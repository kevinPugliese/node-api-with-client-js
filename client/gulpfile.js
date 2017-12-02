'use strict';

var gulp = require('gulp')
    ,imagemin = require('gulp-imagemin')
    ,clean = require('gulp-clean')
    ,concat = require('gulp-concat')
    ,htmlReplace = require('gulp-html-replace')
    ,uglify = require('gulp-uglify')
    ,usemin = require('gulp-usemin')
    ,cssmin = require('gulp-cssmin')
    ,jshint = require('gulp-jshint')
    ,jshintStylish = require('jshint-stylish')
    ,csslint = require('gulp-csslint')
    ,autoprefixer = require('gulp-autoprefixer')
    ,sass = require('gulp-sass');

gulp.task('default', ['copy'], function() {
    gulp.start('build-img', 'usemin');
});

gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('copy', ['clean'], function() {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('build-img', function() {

    return gulp.src('dist/assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('sass', function () {
    return gulp.src('dist/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/assets/scss/'));
});

gulp.task('usemin', function() {
    return gulp.src('dist/**/*.html')
        .pipe(usemin({
            js: [uglify],
            css: [autoprefixer]
        }))
        .pipe(gulp.dest('dist/'));
});
