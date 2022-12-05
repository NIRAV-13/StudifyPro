import Swal from "sweetalert2";
import axios from "axios";

export const routes = {
  home: {
    path: "/",
    isAuthenticated: true,
  },

  notFound: {
    path: "/error",
    isAuthenticated: true,
  },

  login: {
    path: "/login",
    isAuthenticated: true,
  },
  register: {
    path: "/register",
    isAuthenticated: true,
  },
  forgotPassword: {
    path: "/forgot-password",
    isAuthenticated: false,
  },
  passwordChanged: {
    path: "/password-changed",
    isAuthenticated: false,
  },
  dashboard: {
    path: "/dashboard",
    isAuthenticated: true,
  },
  masterclass: {
    path: "/masterclass",
    isAuthenticated: false,
  }, recorded: {
    path: "/recorded",
    isAuthenticated: false,
  }, chat: {
    path: "/chat",
    isAuthenticated: false,
  },quiz: {
    path: "/quiz",
    isAuthenticated: false,
  },
    webinar: {
    path: "/webinar",
    isAuthenticated: false,
  },
  videochat: {
    path: "/videochat",
    isAuthenticated: false,
  },
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

export const isSuccessfulResponse = (response) => {
  return response?.success;
};

export const showPopup = (type, title, msg, callback = () => { }) => {
  Swal.fire(title, msg, type).then(() => {
    callback();
  });
};

export const showError = (error) => {
  const status = error.response.status.toString();
  if (status.match("4[0-9][0-9]")) {
    showPopup("error", "Error", error.response.data.error);
  } else if (status.match("5[0-9][0-9]")) {
    showPopup("error", "Error", "Internal Server Error");
  } else {
    showPopup("error", "Error", "An error occurred. Please try again");
  }
};

export const imgToBase64 = (file, callback) => {
  let base64String = "";
  const reader = new FileReader();
  reader.onload = function () {
    base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
    callback(base64String);
  };
  reader.readAsDataURL(file);
};

export const getUserFullName = (user) => {
  return user.email_id;
};

const base64ToImg = async (url, filename, mimeType) => {
  const res = await fetch(url);
  const buf = await res.arrayBuffer();
  return new File([buf], filename, { type: mimeType });
};

export const addNotification = async (type, message, user_id, callback) => {
  console.log(type, message, user_id);
  axios
    .post(`/api/notification-settings/`, { user_id: user_id })
    .then((ele) => {
      if (ele.data.success[0].types.includes(type)) {
        axios
          .post(`/api/add-notification/`, { data: message, type })
          .then((ele) => {
            if (callback) {
              callback();
            }
          })
          .catch((err) => {
            showError(err);
          });
      }
    });
};
