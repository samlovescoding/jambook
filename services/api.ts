import Axios  from "axios";

// Jambook API
const api = Axios.create()

api.defaults.baseURL = '/api/jambook/'

export default api;