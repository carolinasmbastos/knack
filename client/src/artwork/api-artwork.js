import axios from 'axios'

const searchArtworks = (keyword) => {
  return axios
    .get(`/artworkByArtist/${keyword}`)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

export {
  searchArtworks
}
