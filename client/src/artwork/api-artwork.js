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

const requestOrder = (info) => {
  return axios
    .post(`/placeOrder`, {
        idCustomer: info.idCustomer,
        idArtwork: info.idArtwork,
        orderType: info.orderType,
        idPaymentMethod: info.idPaymentMethod,
        rentalStartDate: info.rentalStartDate,
        rentalEndDate: info.rentalEndDate
    })
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

export {
  searchArtworks,
  findArtwork,
  requestOrder
}
