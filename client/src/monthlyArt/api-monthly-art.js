import axios from "axios";

const getMonthlyArtSubscriptionStatus = userID => {
  return axios
    .get(`/users/${userID}/monthlyArt`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const getPlans = () => {
  return axios
    .get(`/plans`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const getPaymentMethods = userID => {
  return axios
    .get(`/paymentMethods/${userID}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

const subscribeToMonthlyArt = subscriptionInfo => {
  return axios
    .post(`/subscriptions`, subscriptionInfo)
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
