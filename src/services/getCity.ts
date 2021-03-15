import getLocation from "./getLocation";

/**
 * returns city if it was as a uri param otherwise it returns city obtained by ip address
 */
export default async (city: string) => {
  if (city) {
    return city
  }
  const { city: locationCity } = await getLocation()
  return locationCity
}