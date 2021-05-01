//const watchify = require("wathcify");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const { src, dest } = require("gulp");
const { series } = require("gulp");
const babel = require("gulp-babel");

function transpile() {
  return src("src/index.js").pipe(babel()).pipe(dest("dist/"));
}

function brsfi() {
  return browserify("./dist/index.js")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(dest("./dist/"));
}

exports.default = series(transpile, brsfi);
