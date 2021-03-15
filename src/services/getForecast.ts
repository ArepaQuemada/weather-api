import get from "./getMethod"
import config from "../config"

/**
 * returns 5 days 3 hour forecast by city
 */
export default async (city: string) => {
  const forecast = await get(`${config.open_weather_forecast}q=${city}&appid=${config.api_key}`)
  return forecast
}