var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function(){
    return gulp.src([
        './src/scripts/fragments/header_panel.js',
        './src/scripts/index.js'
    ])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./build/'));
});
gulp.task('styles', function(){
    gulp.src([
        './src/styles/normalize.css',
        './src/styles/main.css',
        './src/styles/fragments/header_panel.css'
    ])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('build/'));
});
gulp.task('default', ['scripts', 'styles'], function(){});
