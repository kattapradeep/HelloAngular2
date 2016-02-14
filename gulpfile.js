// include gulp
var gulp = require('gulp');

// include our plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var del = require('del');
var typescript = require('gulp-typescript');
var tsconfig = require('./tsconfig.json');

// clean the contents of distribution directory
gulp.task('clean', function(){
   return del('./app/**/*'); 
});

gulp.task('cleanlibs', function(){
   return del('./lib/**/*'); 
});

gulp.task('copylibs', ['cleanlibs'], function(){
   return gulp.src([
    "./node_modules/systemjs/dist/system-polyfills.js",
       "./node_modules/es6-shim/es6-shim.min.js",
    "./node_modules/angular2/bundles/angular2-polyfills.js",
    "./node_modules/systemjs/dist/system.src.js",
    "./node_modules/rxjs/bundles/Rx.js",
    "./node_modules/angular2/bundles/angular2.dev.js",
   ]).pipe(gulp.dest('./lib')); 
});

// typescript compile
gulp.task('compile', ['copylibs', 'clean'], function(){
    var srcmaps = require('gulp-sourcemaps');
    
   return gulp.src('./src/**/*.ts')
        .pipe(srcmaps.init())
        .pipe(typescript(tsconfig.compilerOptions))
        .pipe(srcmaps.write('.'))
        .pipe(gulp.dest('./app')) 
});

gulp.task('default', ['compile']);