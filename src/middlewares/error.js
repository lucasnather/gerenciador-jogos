import { InvalidTypeError } from "../errors/invalid-type-error.js";
import { ResourceNotFoundError } from "../errors/resource-not-found-error.js";
import { ResourceRequiredError } from "../errors/resource-required-error.js";

export function globalError(err,req, res, next) {

    if (err instanceof ResourceRequiredError) {
        return res.json({
            message: err.message,
            status: 404
        }).status(404) 
    }
    
    if (err instanceof ResourceNotFoundError) {
        return res.json({
            message: err.message,
            status: 404
        }).status(404) 
    }

    if (err instanceof InvalidTypeError) {
        return res.json({
            message: err.message,
            status: 404
        }).status(404) 
    }
    
    return res.json({
        message: "Server Internal Error"
    }).status(500)
}