const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfigFactory = require("./webpack.config.js");

const browserSync = require("browser-sync").create();

const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");

// ---------- JS (Webpack) ----------
function scriptsDev() {
  return gulp
    .src("src/index.js")
    .pipe(webpackStream(webpackConfigFactory({}, { mode: "development" }), webpack))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
}

function scriptsProd() {
  return gulp
    .src("src/index.js")
    .pipe(
      webpackStream(
        webpackConfigFactory({}, { mode: "production" }),
        webpack
      )
    )
    .pipe(gulp.dest("dist"));
}

// ---------- CSS ----------
function styles() {
  return gulp
    .src("src/styles/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
}

// ---------- BrowserSync ----------
function serve() {
  browserSync.init({
    server: { baseDir: "./" },
    notify: false,
    open: true
  });
}

function reload(done) {
  browserSync.reload();
  done();
}

// ---------- Watch ----------
function watchFiles() {
  gulp.watch("src/**/*.js", scriptsDev);
  gulp.watch("src/styles/**/*.scss", styles);
  gulp.watch("*.html", reload);
}

// ---------- Exports ----------
exports.dev = gulp.series(scriptsDev, styles, serve, watchFiles);
exports.build = gulp.series(styles, scriptsProd);
exports.default = scriptsDev;
