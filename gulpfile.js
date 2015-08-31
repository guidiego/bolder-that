var gulp   = require("gulp"),
		uglify = require("gulp-uglify"),
		babel  = require("gulp-babel");	

gulp.task("default", ["build"], function(){
	gulp.watch("dev/**/*", ["build"]);
})

gulp.task("build", ["babel"], function (){
	console.log("Build successifully completed");
})

gulp.task("babel", function () {
	return gulp.src("dev/bolder-that.js")
					.pipe(babel())
					.pipe(uglify())
					.pipe(gulp.dest("dist"));
})
