import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import location from "../api/location";
import current from "../api/current";

export default (app) => {
  app.use(cors())
  app.use(express.json())
  app.get("/", (req, res) => {
    res.status(200)
  })
  app.use("/location", location)
  app.use("/current", current)
}