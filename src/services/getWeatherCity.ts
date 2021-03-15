import fetch from "node-fetch"
import config from "../config"

export default async (city: string) => {
  const response = await fetch(`${config.open_weather_current}q=${city}&appid=${config.api_key}`)
  const weather = response.json()
  return weather
}