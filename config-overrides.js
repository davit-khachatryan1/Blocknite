module.exports = {
    webpackDevServer: (configFunction) => {
        return (proxy, allowedHost) => {
            const config = configFunction(proxy, allowedHost);

            config.setupMiddlewares = (middlewares, devServer) => {
                // Add your custom middlewares here
                middlewares.unshift((req, res, next) => {
                    // Custom middleware functionality for before setup
                    next();
                });

                middlewares.push((req, res, next) => {
                    // Custom middleware functionality for after setup
                    next();
                });

                return middlewares;
            };

            return config;
        };
    }
};
