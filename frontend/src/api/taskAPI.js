import axios from "axios";
import apiHelpers from "./apiHelpers";

const BASE_URL = "http://localhost:8000/api/";

const taskAPI = {};

taskAPI.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}login/`, loginData, apiHelpers.getCsrfConfig())
  );
};

taskAPI.logout = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}logout/`, apiHelpers.getCsrfConfig())
  );
};

taskAPI.signup = async (signupData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}users/`, signupData, apiHelpers.getCsrfConfig())
  );
};

taskAPI.getTasks = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}tasks/`, apiHelpers.getCsrfConfig())
  );
};

taskAPI.getTaskById = async (taskId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}tasks/${taskId}/`, apiHelpers.getCsrfConfig())
  );
};

taskAPI.createTask = async (taskData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}tasks/`, taskData, apiHelpers.getCsrfConfig())
  );
};

taskAPI.updateTask = async (taskId, taskData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.put(
      `${BASE_URL}tasks/${taskId}/`,
      taskData,
      apiHelpers.getCsrfConfig()
    )
  );
};

taskAPI.deleteTask = async (taskId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(`${BASE_URL}tasks/${taskId}/`, apiHelpers.getCsrfConfig())
  );
};

export default taskAPI;
