'use strict'

const _ = require('lodash');
const GitHub  = require('github-api');

exports.getWidgetInfo = async function(params) {
    console.log(params);
    if (!_.hasIn(params, 'token') || !_.hasIn(params, 'user'))
        return false;
    const gh = new GitHub({
        token: params.token
    });
    return new Promise(function (resolve, reject) {
        let me = gh.getUser('Koalax3');
        me.listRepos()
            .then(function({data: reposJson}) {
                try {
                    let repo = {
                        name: reposJson.name,
                        creator: reposJson.owner
                    };
                    resolve(repo);
                }
                catch (e) {
                    resolve(false);
                }
            }).catch(function () {
            reject(false);
        });
    })
};