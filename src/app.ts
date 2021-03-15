import express from "express";
import startPort from "./loaders/port";
import middlewares from "./loaders/middlewares";

/**
 * initializes app
 */
const app = express()

/**
 * middlewares and port
 */
middlewares(app)
startPort(app)
