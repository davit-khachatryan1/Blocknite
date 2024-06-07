devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // Your custom middleware code for onAfterSetupMiddleware
      middlewares.push((req, res, next) => {
        // Custom middleware functionality
        next();
      });
  
      // Your custom middleware code for onBeforeSetupMiddleware
      middlewares.unshift((req, res, next) => {
        // Custom middleware functionality
        next();
      });
  
      return middlewares;
    }
  }
  