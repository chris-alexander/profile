var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

// Push build to gh-pages branch
gulp.task('deploy', function() {
   return gulp.src("./public/**/*")
    .pipe(deploy());
});
