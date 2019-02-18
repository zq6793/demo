var gulp = require("gulp");

gulp.task("copy-html",function(){
	return new Promise(function(resolve,reject){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\xiangyingshi"));
	resolve()
	})
});
gulp.task("copy-img",function(){
	return new Promise(function(resolve,reject){
	//gulp.src("index.html").pipe(gulp.dest("dist"));[]
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\xiangyingshi\\img"));
		resolve()
	})
});
gulp.task("copy-js",function(){
	return new Promise(function(resolve,reject){
	gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\xiangyingshi\\js"));
	resolve()
	})
});
gulp.task("copy-css",function(){
	return new Promise(function(resolve,reject){
	gulp.src("css/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\xiangyingshi\\css"));
	resolve()
	})
});
gulp.task("copy-font",function(){
	return new Promise(function(resolve,reject){
	gulp.src("font/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\PHPTutorial\\WWW\\xiangyingshi\\font"));
	resolve()
	})
});
gulp.task("watch",function(){
	return new Promise(function(resolve,reject){
	gulp.watch("*.html",gulp.series("copy-html"));
	gulp.watch("img/**/*",gulp.series("copy-img"));
	gulp.watch("js/**/*",gulp.series("copy-js"));
	gulp.watch("css/**/*",gulp.series("copy-css"));
	gulp.watch("font/**/*",gulp.series("copy-font"));
	resolve();
	})
	
})
