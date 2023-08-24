import axios from "axios";

export const backofficeApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKOFFICE_API_URL,
});
