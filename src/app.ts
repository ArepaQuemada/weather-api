import express from "express";
import startPort from "./loaders/port";
import middlewares from "./loaders/middlewares";

const app = express()
const dontenv = require("dotenv")

/**
 * Initializes dotenv
 */
dontenv.config()

/**
 * middlewares and port
 */
middlewares(app)
startPort(app)
