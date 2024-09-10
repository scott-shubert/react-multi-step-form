import { AddOnDetails, SubscriptionDetails } from '../interfaces'

export default function AddOns({
	formState,
	setFormState,
}: {
	formState: SubscriptionDetails
	setFormState: (value: SubscriptionDetails) => void
}) {
	const addOns: AddOnDetails[] = [
		{
			id: '1',
			name: 'Online Service',
			cost: 2,
			description: 'Access to multiplayer games',
		},
		{
			id: '2',
			name: 'Larger Storage',
			cost: 3,
			description: 'Extra 1TB of cloud saves',
		},
		{
			id: '3',
			name: 'Custom Profile Theme',
			cost: 1,
			description: 'Custom theme on your profile',
		},
	]

	const handleSelectAddOn = (addOn: AddOnDetails) => {
		const index = formState.addOns.findIndex((value) => value.id === addOn.id)
		if (index < 0) {
			setFormState({ ...formState, addOns: [...formState.addOns, addOn] })
		} else {
			const newAddons = [...formState.addOns]
			newAddons.splice(index, 1)
			setFormState({ ...formState, addOns: newAddons })
		}
	}

	return (
		<div>
			<h2>Pick add-ons</h2>
			<p>Add-ons help enhance your gaming experience.</p>
			<div>
				{addOns.map((addOn) => {
					return (
						<div key={addOn.id}>
							<button onClick={() => handleSelectAddOn(addOn)}>
								<div>
									{formState.addOns.findIndex(
										(value) => value.id === addOn.id
									) >= 0 && 'selected'}
								</div>
								<div>
									<div>{addOn.name}</div>
									<div>{addOn.description}</div>
								</div>
								{formState.yearly && <div>+${addOn.cost * 12}/year</div>}
								{!formState.yearly && <div>+${addOn.cost}/month</div>}
							</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}
