import axios from 'axios'

const searchArtworks = (keyword) => {
  return axios
    .get(`/artworkByKeyword/${keyword}`)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

const findArtwork = (id) => {
  return axios
    .get(`/artworkById/${id}`)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

export {
  searchArtworks,
  findArtwork
}
