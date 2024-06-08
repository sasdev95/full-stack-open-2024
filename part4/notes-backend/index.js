const app = require('./app')  // The Express app
const config = require('./utils/config')
const logger = require('./utils/logger')

// Bind http server assigned to app variable to listen to HTTP requests sent to port 3001
app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`)
})