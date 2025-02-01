// src/api/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/posts"; // Backend URL

export const getPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createPost = async (postData) => {
  const response = await axios.post(API_URL, postData);
  return response.data;
};

export const updatePost = async (id, postData) => {
  const response = await axios.put(`${API_URL}/${id}`, postData);
  return response.data;
};

export const deletePost = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
