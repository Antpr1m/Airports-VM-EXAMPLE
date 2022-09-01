import axios from "axios";

console.log(process.env.REACT_APP_BASE_URL);

export default axios.create({
	// baseURL: process.env.REACT_APP_BASE_URL     переменная в файле .env
	baseURL: 'http://docker.digital-spectr.ru:8888/api/'
})