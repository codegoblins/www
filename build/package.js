import gulp from 'gulp';
import inject from 'gulp-inject';
import wiredep from 'wiredep';
import concat from 'gulp-concat';
import webpackStream from 'webpack-stream';
import path from 'path';
import del from 'del';
import sass from 'gulp-sass';
import es from 'event-stream';
import streamSeries from 'stream-series';

let jsSourceRoot = path.join(process.env.PWD, 'src/js');

// Copies over static files & templates to ./dist
gulp.task('package', ['inject', 'static', 'templates']);

gulp.task('static', () => {
	gulp.src('./src/static/**/*').pipe(gulp.dest('./dist/static'));
});

gulp.task('templates', () => {
	gulp.src('./src/templates/*').pipe(gulp.dest('./dist/templates'));
});

export function buildMyJs() {
	let webpackOptions = {
		devtool: 'inline-source-map',
		module: {
			loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			},
			{
				test: /\.json$/,
				exclude: /node_modules|bower_components/,
				loaders: ['json']
			}
			]
		},
		output: { filename: 'main.pack.js' },
		resolve: { root: jsSourceRoot }
	};

	return gulp.src(path.join(jsSourceRoot, 'main.js'))
					   .pipe(webpackStream(webpackOptions))
					   .pipe(gulp.dest('./dist/js'));
}

export function buildMySass() {
	// compile all SASS
	let sassStream = gulp.src('src/stylesheets/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css/'));

	// copy all CSS
	let cssStream = gulp.src('src/stylesheets/css/*.css')
		.pipe(gulp.dest('dist/css/'));

	return es.merge(sassStream, cssStream);
}

gulp.task('inject', ['clean-dist'], () => {
	let target = gulp.src('./src/index.html');

	let vendorJsStream = gulp.src(wiredep().js || [])
						   .pipe(concat('vendor.js'))
						   .pipe(gulp.dest('./dist/js/vendor'));

	let vendorCssStream = gulp.src(wiredep().css || [])
							  .pipe(gulp.dest('./dist/css/vendor'));

	let appJsStream = buildMyJs();

	let cssStream = buildMySass();

	return target
		  .pipe(inject(es.merge(vendorJsStream, appJsStream, streamSeries(vendorCssStream, cssStream)), {ignorePath: 'dist'}))
		  .pipe(gulp.dest('./dist'));

});

gulp.task('clean-dist', () => {
	del('./dist/*');
});
