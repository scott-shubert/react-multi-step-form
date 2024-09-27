export default function dataFetch(promise: any) {
	return {
		result: wrapPromise(promise),
	}
}

const wrapPromise = (promise: any) => {
	let status = 'pending'
	let result: any
	const suspend: any = promise().then(
		(res: any) => {
			status = 'success'
			result = res
		},
		(err: any) => {
			status = 'error'
			result = err
		}
	)
	return {
		read() {
			if (status === 'pending') {
				throw suspend
			} else if (status === 'error') {
				throw result
			} else if (status === 'success') {
				return result
			}
		},
	}
}
