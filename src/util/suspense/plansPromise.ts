import axios from 'axios'

export async function plansPromise() {
	return axios
		.get('http://localhost:8080/api/plans')
		.then((res) => res.data)
		.catch((err) => console.log(err))
}
