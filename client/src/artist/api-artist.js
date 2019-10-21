import axios from 'axios'

const searchArtist = (artist) => {
  return axios
    .post('/artistSearch', artist)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

export {
  searchArtist
}
