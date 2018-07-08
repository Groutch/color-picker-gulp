var gulp = require('gulp');
var minify = require('gulp-clean-css');
var compass = require('gulp-compass');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
    // transformation du scss en css
    // puis minifiage du css
    gulp.src('./sass/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'stylesheets',
            sass: 'sass'
        }))
        .pipe(minify())
        .pipe(gulp.dest('./stylesheets'));
    // uglification du javascript
    gulp.src('./main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
});
