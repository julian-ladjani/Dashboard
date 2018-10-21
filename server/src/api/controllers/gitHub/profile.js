'use strict'

const _ = require('lodash');
const GitHub  = require('github-api');

exports.getWidgetInfo = async function(params) {
    if (!_.hasIn(params, 'token') || !_.hasIn(params, 'user'))
        return false;
    const gh = new GitHub({
        token: params.token
    });
    return new Promise(function (resolve, reject) {
        let me = gh.getUser(params.user);
        me.getProfile()
            .then(function({data: reposJson}, err) {
                if (err){
                    reject(false);
                }
                let repos;
                try {
                        repos = {
                            'login': reposJson.login,
                            'avatar': reposJson.avatar_url,
                            'url': reposJson.html_url,
                            'bio': reposJson.bio,
                            'location': reposJson.location,
                            'created_at': reposJson.created_at,
                            'updated_at': reposJson.updated_at,
                            'repos': reposJson.public_repos
                        };
                }
                catch (e) {
                    console.error(e);
                    resolve(false);
                }
                resolve(repos);
            }).catch(function () {
            resolve(false);
        });
    })
};