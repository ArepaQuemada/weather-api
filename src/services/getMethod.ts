import fetch from "node-fetch";

/**
 * get method to be used
 */
export default async (uri: string) => {
  const response = await fetch(uri)
  const data = response.json()
  return data;
}