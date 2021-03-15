import express from "express";
import config from "../config";
import fetch from "node-fetch";

const route = express.Router()

route.get("/", async (req, res) => {
  try {
    const response = await fetch(config.ip_api)
    const city = await response.json()
    res.status(200).send(city)
  } catch(err) {
    res.send(err)
  }
})

export default route;