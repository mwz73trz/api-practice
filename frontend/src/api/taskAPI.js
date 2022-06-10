import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const taskAPI = {};

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

taskAPI.getTasks = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}tasks/`));
};

taskAPI.getTaskById = async (taskId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}tasks/${taskId}/`));
};

taskAPI.createTask = async (taskData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}tasks/`, taskData));
};

taskAPI.updateTask = async (taskId, taskData) => {
  return await tryCatchFetch(() =>
    axios.put(`${BASE_URL}tasks/${taskId}/`, taskData)
  );
};

taskAPI.deleteTask = async (taskId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}tasks/${taskId}/`));
};

export default taskAPI;
