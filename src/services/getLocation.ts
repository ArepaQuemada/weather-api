import config from "../config";
import fetch from "node-fetch";

export default async () => {
  const response = await fetch(config.ip_api)
  const location = await response.json()
  return location
}