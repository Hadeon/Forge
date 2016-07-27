var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


// sass or scss
gulp.task('scss', function(){
  gulp.src('assets/sass/main.scss',{base:'src'})
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('assets/'))
  .pipe(browserSync.stream());
})

// browserSync
gulp.task('browserSync',['watch'],function(){
  browserSync.init({
    server:{
      baseDir: ''
    },
    open: true
  });
});

gulp.task('reload', function(){
  browserSync.reload();
});

// watch file changes
gulp.task('watch', ['scss'], function() {
  gulp.watch('assets/sass/main.scss', ['scss']);
  gulp.watch('index.html', ['reload']);
});

// default sequence when typing gulp command
gulp.task('default',['scss','watch','browserSync']);
