import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SubscriptionDetails } from './interfaces'
import { useState } from 'react'
import Plans from './routes/plans'
import Summary from './routes/summary'
import Confirmmation from './routes/confirmation'
import ErrorPage from './routes/error-page'
import Root, { paths } from './routes/root'
import Contact from './routes/contact'
import { allAddOns, plans } from './sampleData'
import AddOns from './routes/addOns'

export default function App() {
	let sub = new SubscriptionDetails()
	sub = {
		...sub,
		plan: plans[0],
		addOns: allAddOns,
	}
	const [formState, setFormState] = useState<SubscriptionDetails>(sub)

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Root />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: paths[0].value,
					element: (
						<Contact
							formState={formState}
							setFormState={(value) => {
								setFormState(value)
							}}
						/>
					),
				},
				{
					path: paths[1].value,
					element: (
						<Plans
							formState={formState}
							setFormState={(value) => {
								setFormState(value)
							}}
						/>
					),
				},
				{
					path: paths[2].value,
					element: (
						<AddOns
							formState={formState}
							setFormState={(value) => {
								setFormState(value)
							}}
						/>
					),
				},
				{
					path: paths[3].value,
					element: <Summary formState={formState} />,
				},
				{
					path: paths[4].value,
					element: <Confirmmation />,
				},
			],
		},
	])

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}
