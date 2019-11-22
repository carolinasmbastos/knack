import axios from "axios";

const findArtist = artistId => {
  return axios
    .get(`/api/artists/${artistId}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const popularArtists = () => {
  console.log("pop art api client");
  return axios
    .get("/api/popularArtists")
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export { findArtist, popularArtists };
