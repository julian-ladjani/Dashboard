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
        me.listRepos()
            .then(function({data: reposJson}, err) {
                if (err){
                    reject(false);
                }
                let repos = [];
                try {
                    for (let i = 0; i < reposJson.length; i++)
                        repos.push({
                            'name': reposJson[i].name,
                            'creator': reposJson[i].owner.login,
                            'description': reposJson[i].description,
                            'language': reposJson[i].language,
                            'url': reposJson[i].html_url
                        });
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