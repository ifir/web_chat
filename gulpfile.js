var gulp = reuqire('gulp'),
	changed = reuqire('gulp-changed'),//检测改变的文件
	sass = reuqire('gulp-sass'),//sass预处理
	runSequence = require('run-sequence'),//任务顺序
	plumber = require('gulp-plumber'),//报错重启
	nodemon = require('gulp-nodemon'),//实时重启服务
	webpack = require('webpack-stream');//连接webpack

var webpackConfig = require('./webpack.config.js');
var vuejspath = 'src/components/**/*.vue';
var scsspath = 'src/assets/scss/*.scss';
var imgpath = 'src/assets/images/*.*';


gulp.task('sass', function (){
	return gulp.src(scsspath)
	.pipe(plumber())
	.pipe(changed('./src/output/css'))
	.pipe(sass({outputStyle:'expanded'}))
	.pipe(gulp.dest('./src/output/css'))
});

gulp.task('webpack', function (){
	return gulp.src(reactjspath)
	.pipe(plumber())
	.pipe(changed('./src/output'))
	.pipe(webpack(config))
  	.pipe(gulp.dest('./src/output/js'));
});

gulp.task('images', function (){
	return gulp.src(imgpath)
	.pipe(plumber())
	.pipe(changed('./src/output/img'))
  	.pipe(gulp.dest('./src/output/img'));
});

gulp.task('nodemon', function() {
	nodemon({
		script: 'app.js',
		ext: 'js vue scss'
		/*env: {
			'NODE_ENV': 'development'
		}*/
	})
});

gulp.task('watch',function (){
	gulp.watch(scsspath, ['sass']);
	gulp.watch(vuejspath,['webpack']);
	gulp.watch(imgpath,['images']);
});

gulp.task('default', function(callback){
	 runSequence(
	 	['sass', 'webpack', 'images', 'watch'],
	 	'nodemon',
	 	callback
	 )
});