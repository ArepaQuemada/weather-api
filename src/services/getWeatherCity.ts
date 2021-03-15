import get from "./getMethod"
import config from "../config"

export default async (city: string) => {
  const weather = await get(`${config.open_weather_current}q=${city}&appid=${config.api_key}`)
  return weather
}