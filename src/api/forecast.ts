import express from "express"
import getCity from "../services/getCity";
import getForecast from "../services/getForecast";

const route = express.Router()

/**
 * route that returns 5 day 3 hour forecast by city
 */
route.get("/:city?", async (req, res) => {
  try {
    const city = await getCity(req.params.city)
    const forecast = await getForecast(city)
    res.send(forecast)  
  } catch (error) {
    res.send(error)
  }
})

export default route;