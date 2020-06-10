import axios from "axios";
// axios.defaults.baseURL = "http://localhost:9999";

// (function() {
//      String token = store.getState().session.token;
//      if (token) {
//          axios.defaults.headers.common['Authorization'] = token;
//      } else {
//          axios.defaults.headers.common['Authorization'] = null;
//          /*if setting null does not remove `Authorization` header then try
//            delete axios.defaults.headers.common['Authorization'];
//          */
//      }
// })();

const data = JSON.parse(localStorage.getItem("userData"));

if (data) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + data.token;
} else {
    axios.defaults.headers.common["Authorization"] = null;
}

export default axios;
