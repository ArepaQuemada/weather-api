import getLocation from "./getLocation";

export default async (city: string) => {
  if (city) {
    return city
  }
  const { city: locationCity } = await getLocation()
  return locationCity
}