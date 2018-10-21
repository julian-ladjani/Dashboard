'use strict';

const YouTube = require('better-youtube-api').YouTube;
const apiKeys = require('../../config/apiKeys');
const request = require('request');

async function getYoutubeChannelId(url) {
    let id = '';
    let username = false;
    let error = false;
    url = url.replace(/(>|<)/gi, '').split(/(\/channel\/|\/user\/)/);
    if (url[2] !== undefined) {
        id = url[2].split(/[^0-9a-z_-]/i);
        id = id[0];
    }
    if (/\/user\//.test(url)) {
        username = id;
    }
    if (!id) {
        return false;
    }
    if (username) {
        let url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${username}&key=${apiKeys.youtube.apiKey}`;
        let bodyPromise = new Promise(function (resolve, reject) {
            request(url, function (err, response, body) {
                if (err)
                    reject(false);
                resolve(body);
            });
        });
        let body = await bodyPromise;
        if (body !== undefined && body !== false) {
            body = JSON.parse(body);
            if (body && body.items && body.items.length) {
                id = body.items[0].id;
            } else
                error = true;
        }
        else
            error = true;
    }
    return {id, username, error};
}

exports.getWidgetInfo = async function (params) {
    const youtubeApi = new YouTube(apiKeys.youtube.apiKey);
    let channelIdObj = await getYoutubeChannelId(params.channelUrl);
    if (channelIdObj === false || channelIdObj.error === true)
        return false;
    return await youtubeApi.getChannel(channelIdObj.id)
        .then(function (channel) {
            return channel.data;
        })
        .catch(function () {
            return false
        });
};