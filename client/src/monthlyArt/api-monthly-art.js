import axios from "axios";

const getMonthlyArtSubscriptionStatus = userID => {
  return axios
    .get(`/api/users/${userID}/monthlyArt`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const getPlans = () => {
  return axios
    .get(`/api/plans`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const getPaymentMethods = userID => {
  return axios
    .get(`/api/paymentMethods/${userID}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const subscribeToMonthlyArt = subscriptionInfo => {
  return axios
    .post(`/api/subscriptions`, subscriptionInfo)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export {
  getMonthlyArtSubscriptionStatus,
  getPaymentMethods,
  getPlans,
  subscribeToMonthlyArt
};
