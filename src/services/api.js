import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio.conexasaude.com.br",
});

export default api;
