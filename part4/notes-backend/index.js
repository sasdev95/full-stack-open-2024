const app = require('./app')  // the actual Express application
const config = require('./utils/config')
const logger = require('./utils/logger')
const cors = require('cors')

app.use(cors())

app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`)
})
