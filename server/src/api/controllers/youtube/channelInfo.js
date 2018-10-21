'use strict';

const YouTube = require('better-youtube-api').YouTube;
const apiKeys = require('../../config/apiKeys');

exports.getWidgetInfo = async function (params) {
    const youtubeApi = new YouTube(apiKeys.youtube.apiKey);
    return await youtubeApi.getChannelByUrl(params.channelUrl)
        .then(function (channel) {
            return channel.data;
        })
        .catch(function (err) {
            return false
        });
};