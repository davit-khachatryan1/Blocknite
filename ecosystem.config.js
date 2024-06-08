module.exports = {
    apps: [
        {
            name: 'Blocknite',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production',
            }
        }
    ],
    deploy: {
        production: {
            user: "blocbdzb",
            host: ["198.177.120.53"],
            repo : "https://davit-khachatryan1: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@github.com/davit-khachatryan1/Blocknite.git",
        }
    }
};