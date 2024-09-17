import axios from "axios";

export const api = axios.create({
    baseURL:'https://projetovivido-back-end.onrender.com',
    // timeout: 5000,
})