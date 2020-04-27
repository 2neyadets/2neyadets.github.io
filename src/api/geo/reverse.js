import geo from '../instances/geo'

export const getLocationByCoordinates = async ({ latitude, longitude }) => {
  try {
    const params = {
      format: 'json',
      lat: latitude,
      lon: longitude,
    }
    const res = await geo.get('reverse', { params })
    return res.data.address
  } catch (e) {
    console.warn('catch getLocationByCoordinates', e)
    return e
  }
}
