'use strict';

const YouTube = require('better-youtube-api').YouTube;
const apiKeys = require('../../config/apiKeys');

exports.getWidgetInfo = async function (params) {
    const youtubeApi = new YouTube(apiKeys.youtube.apiKey);
    return await youtubeApi.getVideoByUrl(params.videoUrl)
        .then(function (video) {
            return video.data;
        })
        .catch(function (err) {
            return false
        });
};