var UntilModel = require('./../models/until.model');

module.exports = {
    resizeImage: function (req, res) {
        UntilModel.resize({ src: './headshots', dest: './new-headshots', width: 132, height: 132 });
    }
}