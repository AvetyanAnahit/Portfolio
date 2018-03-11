var gulp = require('gulp');
var sass = require('gulp-sass');
// svgSprite = require('gulp-svg-sprite');

gulp.task('default', function() {
  // place code for your default task here
});

// gulp.src('path/to/assets/*.svg')
//     .pipe(svgSprite('./icons/archive'/* ... Insert your configuration here ... */ ))
//     .pipe(gulp.dest('out'));

gulp.task('sass', function () {
 return gulp.src('scss/main.scss')
   .pipe(sass({includePaths: ['_/scss/']}).on('error',  sass.logError))
   .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('scss/*.scss', gulp.series('sass'));
});