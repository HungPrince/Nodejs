var Fontmin = require('fontmin');

var fontmin = new Fontmin().src('fonts/Roboto-Bold.woff2').dest('build/fonts');

fontmin.run(function (err, files) {
    if (err) {
        throw err;
    }
    console.log(files[0]);
})