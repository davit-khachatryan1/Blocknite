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
            key: "./davit.pem",
            user: "blocbdzb",
            host: ["198.177.120.53"],
            port: '21098',
            ref: "origin/main",
            repo: "https://davit-khachatryan1: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@github.com/davit-khachatryan1/Blocknite.git",
            path: "/home/blocbdzb/www/production",
            "pre-setup": "echo 'commands or local script path to be run on the host before the setup process starts'",
            "post-setup": "echo 'commands or a script path to be run on the host after cloning the repo'",
            "pre-deploy": "pm2 startOrRestart ecosystem.config.js --env production",
            "post-deploy": "pm2 startOrRestart ecosystem.config.js --env production",
            "pre-deploy-local": "echo 'This is a local executed command'"
        }
    }
};