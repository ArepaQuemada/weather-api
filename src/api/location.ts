import express from "express"
import getLocation from "../services/getLocation"
const route = express.Router()

route.get("/", async (req, res) => {
  try {
    const location = await getLocation()
    res.send(location)
  } catch(err) {
    res.send(err)
  }
})

export default route;