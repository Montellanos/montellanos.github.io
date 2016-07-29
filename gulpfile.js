'use strict';

var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server();
});



gulp.task('reload', function() {
    livereload.listen();
    gulp.watch(
        [
            './*.html',
            'dist/js/*.js'
        ],
        function(file) {
            livereload.reload(file.path);
        });
});


gulp.task('default', ['connect', 'reload']);
