import Axios from 'axios'
const mockURL = `http://localhost:3000/`
const wineURL = 'https://api.spoonacular.com/food/wine/pairing/'

export const api = Axios.create({
	baseURL: mockURL,
	headers: {
	}
})

// export const wineApi = Axios.create({
// 	baseURL: wineURL,
// 	headers: {
// 	}
// })