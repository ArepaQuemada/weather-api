import dontenv from "dotenv"
dontenv.config()

export default {
  port: process.env.PORT,
  api_key: process.env.API_KEY,
  ip_api: process.env.IP_API
}