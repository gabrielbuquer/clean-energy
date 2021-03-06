'use strict';
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    browserSync = require('browser-sync');

var reload = browserSync.reload;
const webpack = require("webpack");

gulp.task('script', function(){
    let webpackConfig = require("./webpack.config.js");
	new Promise(resolve =>
		webpack(webpackConfig, (err, stats) => {
			if (err) console.log("Webpack", err);
			resolve();
		})
    )
    gulp.watch("src/js/**/*.js").on("change", reload);
})

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: ["./pages", "./dist", "./src"]
        },
    });
    gulp.watch("pages/*.html").on("change", reload);
});

gulp.task('sass', function () {
  gulp.src('src/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'))
  .pipe(connect.reload())
  gulp.watch("src/scss/**/*.scss").on("change", reload);
 });

gulp.task('default', ['server', 'script', 'sass'], function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['script']);
}); 

