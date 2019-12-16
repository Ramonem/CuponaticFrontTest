export const getGeo = () => {
  return new Promise((resolve, reject) => {
    try {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          resolve({ latitude, longitude })
        },
        error => {
          resolve(null)
        },
      )
    } catch (error) {
      console.log(error)
      resolve(null)
    }
  })
}
