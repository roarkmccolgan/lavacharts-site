  var gulp = require('gulp'),
       del = require('del'),
      exec = require('child_process').exec,
      sass = require('gulp-ruby-sass'),
    notify = require('gulp-notify'),
     shell = require('gulp-shell'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
     newer = require('gulp-newer'),
   plumber = require('gulp-plumber'),
  imagemin = require('gulp-imagemin'),
sourcemaps = require('gulp-sourcemaps'),
livereload = require('gulp-livereload'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
browserify = require('browserify'),
   shimify = require('browserify-shim');

var config = (function() {
    var resources = './resources';
    var assets    = './assets'

    return {
        paths: {
            src     : resources,
            dest    : assets,
            cache   : './.cache',
            node    : './node_modules',
            scripts : resources+'/js',
            styles  : resources+'/sass',
            images  : resources+'/images',
        }
    };
})();

//process.env.BROWSERIFYSHIM_DIAGNOSTICS=1;

gulp.task('css', function() {
    return sass(config.paths.styles+'/style.sass', {
        style: 'compressed',
        cacheLocation: config.paths.cache,
        loadPath: [
            config.paths.styles,
            config.paths.node + '/bootstrap-sass/assets/stylesheets'
        ]
    })
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(rename({
        extname: ".v3.min.css"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.dest+'/css'))
    .pipe(livereload());
});

gulp.task('js', function() {
    return browserify(config.paths.scripts+'/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        //.pipe(sourcemaps.init())
        //.pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(rename({
            extname: ".v3.min.js"
        }))
        .pipe(gulp.dest(config.paths.dest+'/js'))
        .pipe(livereload());
});

gulp.task('images', function() {
    return gulp.src(config.paths.images+'/**')
               .pipe(newer(config.paths.dest+'/images'))
               .pipe(plumber())
               .pipe(imagemin({
                    optimizationLevel: 5,
                    progressive: true,
                    interlaced: true
                }))
               .pipe(gulp.dest(config.paths.dest+'/images'));
});

gulp.task('fonts', function() {
    return gulp.src(config.paths.node+'/bootstrap-sass/assets/fonts/bootstrap/*')
               .pipe(gulp.dest(config.paths.dest+'/fonts'));
});

gulp.task('api', function() {
    del(['./_site/api/**/*']);

    return exec('./vendor/bin/sami.php update ./sami.cfg.php', function (err, stout, sterr) {
        console.log(stout);
    });
});

gulp.task('watch', ['default'], function() {
    livereload.listen();

    gulp.watch(config.paths.styles+'/**/*ss', [
        'css'
    ]);

    gulp.watch(config.paths.scripts + '/**/*.js', [
        'js'
    ]);
});

gulp.task('default', [
    'css',
    'js'
]);

