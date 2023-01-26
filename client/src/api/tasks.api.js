import axios from "axios";

const API = import.meta.env.VITE_APP_API_PORT;
const PORT = import.meta.env.VITE_APP_API_PORT_NUMBER;




export const getTasksRequest = async () => {
  const response = await axios.get(`${API}${PORT}/tasks`);
  return response.data;
};

export const createTaskRequest = async (task) => {
  await axios.post(`${API}${PORT}/tasks`, task);
};

export const deleteTaskRequest = async (id) => {
  await axios.delete(`${API}${PORT}/tasks/${id}`);
};

export const getTaskRequest = async (id) => {
  const response = await axios.get(`${API}${PORT}/tasks/${id}`);
  return response;
};

export const updateTaskRequest = async (id, newFields) => {
  await axios.put(`${API}${PORT}/tasks/${id}`, newFields);
};
