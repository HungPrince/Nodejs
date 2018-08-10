var fs = require('fs');
var resizeImage = require('resize-image');

module.exports = {

    resize: function (params) {
        fs.readdir(params.src, function (err, files) {
            if (err) {
                console.log(err);
            }
            files.forEach(function (file) {
                var img = new Image();
                img.onload = function () {
                    var data = resizeImage.resize(img, params.width, params.height, resizeImage.PNG);
                    console.log(data);
                };
                img.src = params.src + file;
            });
        });
    }
}
