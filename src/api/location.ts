import express from "express"
import getLocation from "../services/getLocation"
const route = express.Router()

/**
 * route that returns current location and ip address
 */
route.get("/", async (req, res) => {
  try {
    const location = await getLocation()
    res.send(location)
  } catch(err) {
    res.send(err)
  }
})

export default route;