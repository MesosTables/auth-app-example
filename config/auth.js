// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '122068675129183', // your App ID
        'clientSecret'  : '0eb7bad8ac2ee6a39c9e8adccb6085b3', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'KrHxiYjvWiKAevvj0ZnvkLapM',
        'consumerSecret'    : 'MCoBNAl4wJj6ztej8COSdWGHDLSzQBlNalVM3POzadGAGQhe0N',
        'callbackURL'       : ' http://127.0.0.1:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '100014136502-ufemu7v11sqit0d5bo17t8prc0eri4nq.apps.googleusercontent.com',
        'clientSecret'  : 'QVWO5VtLvPe04GoBFEr6riFG',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
