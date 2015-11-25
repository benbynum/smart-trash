var gulp = require('gulp'),
	gutil = require('gulp-util'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat');

var sources = [
	'css/*.*',
	'js/*.*',
	'js/*/*.*',
	'index.html',
	'views/*.*'
]

gulp.task('connect', function() {
	connect.server({
		livereload: true
	})
})

gulp.task('watch', function() {
	gulp.watch(sources, ['reload'])
})

gulp.task('reload', function() {
	gulp.src(sources)
		.pipe(connect.reload());
})

gulp.task('default', ['connect', 'watch'])