import gulp from 'gulp';
import express from 'express';

import sass from 'gulp-sass';
import browserSync from 'browser-sync';

import path from 'path';
import {buildMyJs} from './package';
import {buildMySass} from './package';

let _browserSync = browserSync.create();
let jsSourceRoot = path.join(process.env.PWD, 'src/js');

function serveStaticSite() {
	let server = express();

	server.use(express.static('dist'));

	server.listen(3000);
}

function reloadPage(stream) {
	_browserSync.reload({stream: stream});
}

gulp.task('serve:dev', ['package'], () => {
	_browserSync.init({
		server: {
			baseDir: 'dist'
		},
		browser: []
	});

	gulp.start('watch');
});

gulp.task('browsersync-reload', [], () => {
	_browserSync.reload();
});

gulp.task('serve', ['package'], serveStaticSite);

gulp.task('watch', () => {
	gulp.watch('src/templates/*.html', (evt) => {
		console.log(`${evt.path} updated, copying over`);
		gulp.src(evt.path).pipe(gulp.dest('./dist/templates'));
		reloadPage(false);
	});

	gulp.watch('src/stylesheets/sass/*.scss', (evt) => {
		console.log(`${evt.path} changed, recompiling`);
		buildMySass();
		reloadPage(false);
	});

	gulp.watch('src/js/*.js', (evt) => {
		console.log(`${evt.path} changed, recompiling`);
		buildMyJs();
		reloadPage(false);
	});
});
