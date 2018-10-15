'use strict';

module.exports = {
    'googleAuth': {
        clientID: '1045572143715-ruevrnkud3ckmeajm03kvm85lcpi7chc.apps.googleusercontent.com',
        clientSecret: 'IkR4AfSBU2uV8-2rPhrG1TTb',
        callbackURL: "http://127.0.0.1.xip.io:8080/auth/google/callback",
        passReqToCallback: true
    },
    'facebookAuth' : {
        'clientID' 		: 'your-secret-clientID-here', // your App ID
        'clientSecret' 	: 'your-client-secret-here', // your App Secret
        'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey' 		: 'your-consumer-key-here',
        'consumerSecret' 	: 'your-client-secret-here',
        'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
    },
    'jwt': {
        secretToken: 'bjsdjodjerzbofabmsn'
    },
};