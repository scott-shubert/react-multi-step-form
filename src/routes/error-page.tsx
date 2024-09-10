import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
	const error: any = useRouteError()
	return (
		<div id='error-page'>
			<div>Error: {error.statusText || error.message}</div>
		</div>
	)
}
