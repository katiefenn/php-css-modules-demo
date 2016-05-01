var gulp = require('gulp');
var postcss = require('gulp-postcss');
var concat = require('gulp-concat');
var modules = require('postcss-modules');

gulp.task('default', ['css']);

gulp.task('css', function () {
    var processors = [
        modules()
    ];
    return gulp.src(['./webroot/views/**/*.css', './webroot/assets/**/*.css'])
        .pipe(postcss(processors))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./webroot/build'));
});

// Handle the error
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}
