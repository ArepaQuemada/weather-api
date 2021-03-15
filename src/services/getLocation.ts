import config from "../config"
import get from "./getMethod"

export default async () => {
  const location = await get(config.ip_api)
  return location
}