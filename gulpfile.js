
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

gulp.task('min', function(){
  return gulp.src('./dist/*.css')
  .pipe(uglifycss ({
    "uglyComments": true
  }))
  .pipe(gulp.dest('./dist/'))
});
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
  .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));    
});

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  