import Joi from "joi";

import { emailRegepxp } from "../constants/user-constants.js";

export const userSignupSchema = Joi.object({
    name: Joi.string().min(2).max(32).required(),
    email: Joi.string().pattern(emailRegepxp).required(),
    password: Joi.string().min(8).max(64).required(),
});

export const userSigninSchema = Joi.object({
    email: Joi.string().pattern(emailRegepxp).required(),
    password: Joi.string().min(8).max(64).required(),
});

export const userEmailSchema = Joi.object({
    email: Joi.string().pattern(emailRegepxp).required(),
});

export const needHelpEmailSchema = Joi.object({
    email: Joi.string().pattern(emailRegepxp).required(),
    comment: Joi.string().required(),
});

export const userUpdateSchema = Joi.object({
    name: Joi.string().min(2).max(32),
    email: Joi.string().pattern(emailRegepxp).messages({
        "string.pattern.base": "Email must be a valid email address",
    }),
    password: Joi.string().min(8).max(64),
});
