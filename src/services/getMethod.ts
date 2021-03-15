import fetch from "node-fetch";

export default async (uri: string) => {
  const response = await fetch(uri)
  const data = response.json()
  return data;
}