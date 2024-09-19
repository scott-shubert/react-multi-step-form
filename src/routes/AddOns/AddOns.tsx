import { SubscriptionDetails } from '../../interfaces'

export default function AddOns({
	formState,
	setFormState,
}: {
	formState: SubscriptionDetails
	setFormState: (value: SubscriptionDetails) => void
}) {
	const handleSelectAddOn = (id: string) => {
		const addOns = [...formState.addOns].map((addon) => {
			if (addon.id === id) {
				return { ...addon, selected: !addon.selected }
			}
			return { ...addon }
		})
		setFormState({ ...formState, addOns })
	}

	return (
		<div>
			<h2 className='title'>Pick add-ons</h2>
			<p className='description'>
				Add-ons help enhance your gaming experience.
			</p>
			<div className='add-on-content'>
				{formState.addOns.map((addOn) => {
					return (
						<div key={addOn.id} className='add-on-div'>
							<button
								onClick={() => handleSelectAddOn(addOn.id)}
								className={
									addOn.selected
										? 'add-on-button add-on-selected'
										: 'add-on-button'
								}
							>
								<div className='add-on-left'>
									{addOn.selected ? (
										<div className='checked-box'>
											<img
												src='/images/icon-checkmark.svg'
												className='checkmark'
											/>
										</div>
									) : (
										<div className='unchecked-box'></div>
									)}
									<div>
										<div className='add-on-name'>{addOn.name}</div>
										<div className='add-on-description'>
											{addOn.description}
										</div>
									</div>
								</div>
								<div className='add-on-price'>
									{formState.yearly ? (
										<>+${addOn.cost.yearly}/yr</>
									) : (
										<>+${addOn.cost.monthly}/mo</>
									)}
								</div>
							</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}
