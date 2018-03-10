var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('sass', function () {
 return gulp.src('scss/main.scss')
   .pipe(sass({includePaths: ['_/scss/']}).on('error',  sass.logError))
   .pipe(gulp.dest('./css'));
});
gulp.task('sass:watch', function () {
    gulp.watch('scss/*.scss', ['sass']);
});
