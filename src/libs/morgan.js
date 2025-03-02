import { logger } from "./winston.js"

export const morganStream = {
    write (message) {
        logger.info(message)
    }
}