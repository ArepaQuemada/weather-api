import express, { Express } from "express"
import cors from "cors"
import location from "../api/location"
import current from "../api/current"
import forecast from "../api/forecast"

/**
 * middlewares
 */
export default (app: Express) => {
  app.use(cors())
  app.use(express.json())
  app.get("/", (req, res) => {
    res.status(200)
  })
  app.use("/v1/location", location)
  app.use("/v1/current", current)
  app.use("/v1/forecast", forecast)
}