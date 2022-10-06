import axios from "axios"

export const api = axios.create({
    baseURL:"http://127.0.0.1:8000/api/"

});

export const createSession = async (email, password) => {
    return api.post("token/", {email, password})
}