import { useMemo } from 'react'
import { SubscriptionDetails } from '../interfaces'

export default function Summary({
	formState,
}: {
	formState: SubscriptionDetails
}) {
	let total = 0
	useMemo(() => {
		if (formState.yearly) {
			total = formState.plan!.cost.yearly
			for (const addon of formState.addOns) {
				total += addon.cost * 12
			}
		} else {
			total = formState.plan!.cost.monthly
			for (const addon of formState.addOns) {
				total += addon.cost
			}
		}
	}, [])

	return (
		<div>
			<h2>Finishing up</h2>
			<p>Double check everything looks OK before confirming.</p>
			<div>
				<div>
					<div>
						{formState.plan!.name} ({formState.yearly ? 'yearly' : 'monthly'})
					</div>
					{formState.yearly && <div>${formState.plan?.cost.yearly}/year</div>}
					{!formState.yearly && (
						<div>${formState.plan?.cost.monthly}/month</div>
					)}
				</div>
				{formState.addOns.length !== 0 && (
					<div>
						{formState.addOns.map((addon) => {
							return (
								<div key={addon.id}>
									<div>{addon.name}</div>
									{formState.yearly && <div>+${addon.cost * 12}/yr</div>}
									{!formState.yearly && <div>+${addon.cost}/mon</div>}
								</div>
							)
						})}
					</div>
				)}
				<div>
					<div>Total (per {formState.yearly ? 'year' : 'month'})</div>
					{formState.yearly && <div>${total}/yr</div>}
					{!formState.yearly && <div>${total}/mon</div>}
				</div>
			</div>
		</div>
	)
}
