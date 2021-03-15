import express from "express"
import getCity from "../services/getCity"
import getWeatherCity from "../services/getWeatherCity"

const route = express.Router()

/**
 * route that returns current weather by city
 */
route.get("/:city?", async(req, res) => {
  try {
    const city = await getCity(req.params.city)
    const weather = await getWeatherCity(city)
    res.send(weather)
  } catch(error) {
    res.send(error)
  }
})

export default route