import axios from "axios";

const api = axios.create({
  baseURL: "desafio.conexasaude.com.br/",
});

export default api;
