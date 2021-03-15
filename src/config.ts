import dontenv from "dotenv"
dontenv.config()

/**
 * config object to access enviorment variables
 */
export default {
  port: process.env.PORT,
  api_key: process.env.API_KEY,
  ip_api: process.env.IP_API,
  open_weather_current: process.env.OPEN_WEATHER_CURRENT,
  open_weather_forecast: process.env.OPEN_WEATHER_FORECAST
}