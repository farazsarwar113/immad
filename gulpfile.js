var gulp =  require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/styles.scss", ['sass']);
    gulp.watch("app/index.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
	//Convert SCSS to CSS
	return gulp.src('app/scss/styles.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);