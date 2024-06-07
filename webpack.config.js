module.exports = {
    // other webpack configuration settings
  
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        // Custom middleware previously in onBeforeSetupMiddleware
        middlewares.unshift((req, res, next) => {
          // Custom middleware functionality
          next();
        });
  
        // Custom middleware previously in onAfterSetupMiddleware
        middlewares.push((req, res, next) => {
          // Custom middleware functionality
          next();
        });
  
        return middlewares;
      },
      // other devServer settings
    }
  };
  