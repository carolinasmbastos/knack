import axios from 'axios'

const searchArtist = (artist) => {
  return axios
    .get('/artists/search/', artist)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

const popularArtists = () => {
    console.log("pop art api client")
    return axios
      .get('/popularArtists')
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  }

export {
  searchArtist,
  popularArtists
}
