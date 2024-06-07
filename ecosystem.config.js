module.exports = {
    apps: [
        {
            name: 'Blocknite',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
};