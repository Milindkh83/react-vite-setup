import CONFIG from "./config.js";

const API_ENDPOINTS = {
  // Authentication APIs
  POST_AUTHENTICATION_USER_LOGIN: {
    method: "POST",
    // url: `${CONFIG.BASE_URL}v1/auth/authenticate`,
    url: `${CONFIG.BASE_URL}/auth/login`,
  },
};

export default API_ENDPOINTS;