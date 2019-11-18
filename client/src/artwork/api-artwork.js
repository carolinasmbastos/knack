import axios from "axios";

const searchArtworks = keyword => {
  return axios
    .get(`/artworks/search/${keyword}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const findArtwork = id => {
  return axios
    .get(`/artworks/${id}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const findArtworkByArtistId = artistId => {
    return axios
      .get(`/artworks/artists/${artistId}`)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  };

const requestOrder = info => {
  return axios
    .post(`/orders`, {
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
    .get(`/periods`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export { searchArtworks, findArtwork, findArtworkByArtistId, requestOrder, getTimelines };
