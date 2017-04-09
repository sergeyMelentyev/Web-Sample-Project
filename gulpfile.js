var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('initialize', function(){
    return gulp.src([
        './src/scripts/init/color_object.js'
    ])
        .pipe(concat('bundle.init.js'))
        .pipe(gulp.dest('./build/'));
});
gulp.task('fragments', function(){
    return gulp.src([
        './src/scripts/fragments/header_elem.js'
    ])
        .pipe(concat('bundle.fragments.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('styles', function(){
    gulp.src([
        './src/styles/normalize.css',
        './src/styles/main.css',
        './src/styles/fragments/header_panel.css'
    ])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./build/'));
});
gulp.task('default', ['initialize', 'fragments', 'styles'], function(){});
