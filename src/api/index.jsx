import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
const baseUrl = "http://13.214.194.163:5400";

// Position API
export const getPosition = async () => {
  const res = await axios.get(`${baseUrl}/api/v1/positions/paging/1/10/`);
  return res.data;
};

export const postPosition = async (data) => {
  const res = await axios.post(`${baseUrl}/api/v1/positions/create`, data);
  return res.data;
};

export const updatePosition = async (_id) => {
  const res = await axios.put(`${baseUrl}/api/v1/positions/update/${_id}`);
  return res.data;
};

export const deleteePosition = async (_id) => {
  const res = await axios.delete(`${baseUrl}/api/v1/positions/delete/${_id}`);
  return res.data;
};

// Employees API
export const getEmployees = async () => {
  const res = await axios.get(`${baseUrl}/api/v1/employees/paging/1/10`);
  return res.data;
};

export const postEmployees = async (data) => {
  const res = await axios.post(`${baseUrl}/api/v1/employees/create`, data);
  return res.data;
};

export const updateEmployees = async (_id) => {
  const res = await axios.put(`${baseUrl}/api/v1/employees/update/${_id}`);
  return res.data;
};

export const deleteeEmployees = async (_id) => {
  const res = await axios.delete(`${baseUrl}/api/v1/employees/delete/${_id}`);
  return res.data;
};

// Sallarys API
export const getSallarys = async () => {
  const res = await axios.get(`${baseUrl}/api/v1/sallarys/paging/1/10`);
  return res.data;
};

export const postSallarys = async (data) => {
  const res = await axios.post(`${baseUrl}/api/v1/sallarys/create`, data);
  return res.data;
};

export const updateSallarys = async (_id) => {
  const res = await axios.put(`${baseUrl}/api/v1/sallarys/update/${_id}`);
  return res.data;
};

export const deleteeSallarys = async (_id) => {
  const res = await axios.delete(`${baseUrl}/api/v1/sallarys/delete/${_id}`);
  return res.data;
};

export const login = async (data) => {
  const res = await axios.post(`${baseUrl}/api/v1/auth/login`, data);
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  //   navigate("/login");
};
