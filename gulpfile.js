var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var purescript = require('gulp-purescript');

process.env['NODE_PATH'] = __dirname + '/purescript_modules';

gulp.task('purescript:node', function () {
  return gulp.src(['src/**/*.purs', 'bower_components/**/src/**/*.purs'])
    .pipe(purescript.pscMake({output: 'purescript_modules'}))
});

gulp.task('purescript:psci', function () {
  return gulp.src(['src/**/*.purs', 'bower_components/**/src/**/*.purs', '!src/**/Main.purs'])
    .pipe(purescript.dotPsci());
});

gulp.task('browserify', function () {
  var b = browserify({
    entries: './src/app.js',
    debug: true,
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['purescript:node', 'purescript:psci']);
