import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "05b57f0cd15a95e11e8bd7a659faa478",
        language: "ko-KR"
    }
})

export default instance;