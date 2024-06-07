module.exports = {
    apps: [
        {
            name: 'Blocknite',
            script: 'node_modules/.bin/react-scripts',
            args: 'start -p 3000',
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
};