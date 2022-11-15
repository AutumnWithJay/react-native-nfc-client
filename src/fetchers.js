import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const employeeApi = {
  get: async (aptId) => {
    return await axiosInstance.get(`/?aptId=${aptId}`).then((res) => res.data);
  },

  register: async (data) => {
    return await axiosInstance
      .post('/', {
        data,
      })
      .then((res) => res.data);
  },
};

export const patrolApi = {
  get: async (aptId) => {
    return await axiosInstance
      .get(`/patrol?aptId=${aptId}`)
      .then((res) => res.data);
  },

  register: async (data) => {
    return await axiosInstance
      .post('/patrol', {
        data,
      })
      .then((res) => res.data);
  },
};
