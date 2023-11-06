const Joi = require("joi");

const registerUserValidation = Joi.object({
    username: Joi.string().length(100),
    
})