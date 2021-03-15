import config from "../config"
import get from "./getMethod"

/**
 * returns location and ip address
 */
export default async () => {
  const location = await get(config.ip_api)
  return location
}