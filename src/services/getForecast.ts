import get from "./getMethod"
import config from "../config"

export default async (city: string) => {
  const forecast = await get(`${config.open_weather_forecast}q=${city}&appid=${config.api_key}`)
  return forecast
}