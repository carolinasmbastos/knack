import axios from "axios";

const searchArtworks = keyword => {
  return axios
    .get(`/api/artworks/search/${keyword}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const findArtwork = id => {
  return axios
    .get(`/api/artworks/${id}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const findArtworkByArtistId = artistId => {
  return axios
    .get(`/api/artworks/artists/${artistId}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const requestOrder = info => {
  return axios
    .post(`/api/orders`, {
      idCustomer: info.idCustomer,
      idArtwork: info.idArtwork,
      orderType: info.orderType,
      idPaymentMethod: info.idPaymentMethod,
      rentalStartDate: info.rentalStartDate,
      rentalEndDate: info.rentalEndDate
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const getTimelines = () => {
  return axios
    .get(`/api/periods`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export {
  searchArtworks,
  findArtwork,
  findArtworkByArtistId,
  requestOrder,
  getTimelines
};
