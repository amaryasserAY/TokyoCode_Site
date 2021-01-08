var gulp = require("gulp"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  sourcemaps = require("gulp-sourcemaps"),
  minify = require("gulp-minify"),
  pug = require("gulp-pug"),
  notify = require("gulp-notify"),
ftp = require( 'vinyl-ftp' ),
zip = require('gulp-zip');



// gulp.task( 'deploy', function () {
 
//     var conn = ftp.create( {
//         host:     'tokyocode.atwebpages.com',
//         user:     '3706011_amar',
//         password: '-Zegb4quVFZ6/++',
//         parallel: 10
       
//     } );

//     return gulp.src( ['dist/**/*.*' ], { base: '.', buffer: false } )
//           .pipe( conn.newer( '/public_html' ) ) // only upload newer files
//         .pipe( conn.dest('/public_html') );
 
// } );



gulp.task("html", function () {
  
  return gulp.src("stage/html/*.pug")
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest("dist"));

});

gulp.task("html2", function () {
  
  return gulp.src("stage/html/templates/*.pug")
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest("dist/Template"));

});




gulp.task("css", function () {
  return gulp
    .src(["stage/css/**/*.css", "stage/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"));
   
  
});

gulp.task("js", function () {
  return gulp
    .src("stage/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js"));
   
   
});

gulp.task("compress", function () {
  return gulp
    .src("dist/**/*.*")
 .pipe(zip('TokyoCode.zip'))
   .pipe(gulp.dest('.'))
   
});



gulp.task("watch", function () {
  gulp.watch("stage/html/**/*.pug", ["html"]);
    gulp.watch("stage/html/templates/**/*.pug", ["html2"]);
  gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], ["css"]);
  gulp.watch("stage/js/*.js", ["js"]);
  gulp.watch("dist/**/*.*", ["compress"]);
    // gulp.watch("dist/**/*.*", ["deploy"]);
});



