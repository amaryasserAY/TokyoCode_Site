var gulp = require("gulp"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  sourcemaps = require("gulp-sourcemaps"),
  minify = require("gulp-minify"),
  notify = require("gulp-notify");





gulp.task("css", function () {
  return gulp
    .src(["stage/css/**/*.css", "stage/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(notify("CSS is Done"));
  
});

gulp.task("js", function () {
  return gulp
    .src("stage/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js"))
    .pipe(notify("JS is Done"));
   
});

gulp.task("watch", function () {
  gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], ["css"]);
  gulp.watch("stage/js/*.js", ["js"]);
});



