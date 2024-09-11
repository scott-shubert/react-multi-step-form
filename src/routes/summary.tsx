import { useMemo } from 'react'
import { SubscriptionDetails } from '../interfaces'
import { useNavigate } from 'react-router'
import { paths } from './root'

export default function Summary({
	formState,
}: {
	formState: SubscriptionDetails
}) {
	const navigate = useNavigate()
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

	const handleClick = () => {
		navigate(paths[1].value)
	}

	return (
		<div>
			<h2 className='title'>Finishing up</h2>
			<p className='description'>
				Double check everything looks OK before confirming.
			</p>
			<div>
				<div className='summary-plan'>
					<div>
						<div>
							{formState.plan!.name} ({formState.yearly ? 'Yearly' : 'Monthly'})
						</div>
						<button className='summary-change-btn' onClick={handleClick}>
							Change
						</button>
					</div>
					{formState.yearly && <div>${formState.plan?.cost.yearly}/yr</div>}
					{!formState.yearly && <div>${formState.plan?.cost.monthly}/mo</div>}
				</div>
				{formState.addOns.length !== 0 && (
					<div className='summary-addons'>
						<hr className='summary-divide' />
						{formState.addOns.map((addon) => {
							if (addon.selected)
								return (
									<div className='summary-addon' key={addon.id}>
										<div className='summary-addon-name'>{addon.name}</div>
										{formState.yearly && <div>+${addon.cost * 12}/yr</div>}
										{!formState.yearly && <div>+${addon.cost}/mo</div>}
									</div>
								)
						})}
					</div>
				)}
				<div className='summary-total'>
					<div className='total-text'>
						Total (Per {formState.yearly ? 'Year' : 'Month'})
					</div>
					<div className='total-price'>
						${total}
						{formState.yearly ? '/yr' : '/mo'}
					</div>
				</div>
			</div>
		</div>
	)
}
