var gulp =  require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/assets/scss/styles.scss", ['sass']);
    gulp.watch("app/index.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
	//Convert SCSS to CSS
	return gulp.src('app/assets/scss/styles.scss')
		.pipe(sass({
	      // includePaths: require('node-bourbon').with('other/path', 'another/path') 
	      // - or - 
	      includePaths: require('node-bourbon').includePaths
	    }))
		.pipe(gulp.dest('app/assets/css'))
		.pipe(browserSync.stream());
});

