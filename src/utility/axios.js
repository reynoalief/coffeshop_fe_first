import axios from "axios";
const URLBE = process.env.REACT_APP_BACKEND_HOST;

const getURL = URLBE;

// Axios register
export const Register = (body) => {
  return axios.post(`${getURL}/user/register`, body);
};

// Axios Get user by id
export const userID = (token) => {
  return axios.get(`${getURL}/user`, {
    headers: {
      "x-access-token": token,
    },
  });
};

// Axios Login
export const LoginUser = (body) => {
  return axios.post(`${getURL}/auth`, {
    email: body.email,
    password: body.passwords,
  });
};

// Axios getHistory
export const getHistory = (token) => {
  return axios.get(`${getURL}/transaction/history?page=1&limit=10`, {
    headers: {
      "x-access-token": token,
    },
  });
};

// Axios Logout
export const Logout = (token) => {
  return axios.delete(`${getURL}/auth`, {
    headers: {
      "x-access-token": token,
    },
  });
};

// Axios Transactions
export const transactions = (token, body) => {
  return axios.post(`${getURL}/transaction/add`, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

// Axios getHistory All
export const getHistoryAll = (token) => {
  return axios.get(`${getURL}/transaction/history`, {
    headers: {
      "x-access-token": token,
    },
  });
};

// Axios getHistory Admin
export const getHistoryAdmin = (token) => {
  return axios.get(`${getURL}/transaction/all`, {
    headers: {
      "x-access-token": token,
    },
  });
};

// Axios Delete historyid
export const deleteHistoryId = (token, id) => {
  return axios.delete(`${getURL}/transaction/${id}`, {
    headers: {
      "x-access-token": token,
    },
  });
};
export const deleteProduct = (token, id) => {
  return axios.delete(`${getURL}/product/${id}`, {
    headers: {
      "x-access-token": token,
    },
  });
};

// Axios Change Payment
// export const changePaymentStatus = (token, statusPayment, id) => {
//   return axios.patch(
//     `${URL}/transaction/users/${statusPayment}/${id}`,
//     {
//       headers: {
//         'x-access-token': token,
//       },
//     },
//   );
// };
export const changePaymentStatus = (token, body, id) => {
  return axios.patch(`${getURL}/transaction/${id}`, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

// Axios reset password
export const Resetpassword = (token, body) => {
  return axios.patch(`${getURL}/user/edit`, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

//Axios patch profile
export const editProfile = (token, body) => {
  return axios.patch(`${getURL}/profile`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-access-token": token,
    },
  });
};

//add product
export const addProduct = (token, body) => {
  return axios.post(`${getURL}/product/add`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-access-token": token,
    },
  });
};

export const patchProduct = (token, body, id) => {
  return axios.patch(`${getURL}/product/${id}`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-access-token": token,
    },
  });
};

//create promo
export const createPromo = (token, body) => {
  return axios.post(`${getURL}/promos/add`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-access-token": token,
    },
  });
};

//edit promo
export const editPromo = (token, body, params) => {
  return axios.patch(`${getURL}/promo/${params}`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-access-token": token,
    },
  });
};

//edit product
export const editProduct = (token, body, params) => {
  return axios.patch(`${getURL}/product/${params}`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
      "x-access-token": token,
    },
  });
};

// Axios Delete promo
export const deletePromo = (token, id) => {
  return axios.delete(`${getURL}/promos/${id}`, {
    headers: {
      "x-access-token": token,
    },
  });
};
