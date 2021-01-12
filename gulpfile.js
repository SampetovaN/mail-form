'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemap = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var del = require('del');
var imagemin = require('gulp-imagemin');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var wrapper = require('gulp-wrapper');
var replace = require('gulp-replace');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');


gulp.task('clean', function () {
  return del('build');
});

gulp.task('images', function () {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
    .pipe(imagemin([imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({progressive: true})]))
    .pipe(gulp.dest('source/img'));
});


gulp.task('copy', function () {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**',
    '!source/img/sprite-*.svg',
  ], {
    base: 'source'
  })
    .pipe(gulp.dest('build'))
});

gulp.task('script', function () {
  return gulp.src(['source/js/*.js'])
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(replace(/['"]use strict['"];/g, ''))
    .pipe(wrapper({header: '\'use strict\';\n' }))
    .pipe(gulp.dest('build/js'));
});


gulp.task('html', function () {
  return gulp.src('source/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});


gulp.task('server', function () {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/sass/**/*.scss', gulp.series('css'));
  gulp.watch('source/js/*.js', gulp.series('script', 'refresh'));
  gulp.watch('source/img/sprite-*.svg', gulp.series('html', 'refresh'));
  gulp.watch('source/*.html', gulp.series('html', 'refresh'));
});

gulp.task('refresh', function (done) {
  server.reload();
  done();
});


gulp.task('build', gulp.series('clean', 'copy', 'css', 'script', 'html'));
gulp.task('image', gulp.series('images'));
gulp.task('start', gulp.series('build', 'server'));
