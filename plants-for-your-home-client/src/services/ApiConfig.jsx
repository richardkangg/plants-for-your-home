import Axios from 'axios'
const mockURL = `http://localhost:3000/`

export const api = Axios.create({
	baseURL: mockURL,
	headers: {
	}
})