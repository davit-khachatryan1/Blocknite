module.exports = {
    apps: [
        {
            name: 'Blocknite',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production',
                user : "blocbdzb",
                host : ["198.177.120.53"],
            }
        }
    ]
};