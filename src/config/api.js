import axios from 'axios'
const HOST = `https://ww4.cuponatic.com/`

export const API = {}

function validateRequest(request) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(`validate`)
      const { data } = await request()
      console.log(data)
      if (data) {
        resolve(data)
      } else {
        console.error(data)
        reject(data)
      }
    } catch (error) {
      console.error(error)
      reject(error)
    }
  })
}

API.fetchProducts = geo =>
  validateRequest(() =>
    axios.get(
      `${HOST}get?c=Santiago&categoria=Belleza&n=60${
        geo ? `&latitud=${geo.latitude}&longitud=${geo.longitude}` : ``
      }`,
    ),
  )
