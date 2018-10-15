'use strict';

const SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();
exports.get_check = function(req,res){
    console.log(req.client);
    //res.send("love");
}

exports.get_search = function () {
    spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
        .then(function(data) {
            console.log('Artist information', data.body);
            //res.send(data.body);
        }, function(err) {
            console.error('#',err);
        });
}

module.exports = (accessToken) =>  {
    spotifyApi.setAccessToken(accessToken);
}
