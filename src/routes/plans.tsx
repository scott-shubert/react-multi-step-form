import ReactSwitch from 'react-switch'
import { PlanDetails, SubscriptionDetails } from '../interfaces'

export const plans: PlanDetails[] = [
	{
		id: '1',
		name: 'Arcade',
		cost: {
			monthly: 10,
			yearly: 90,
		},
		monthsFree: 2,
		imageURL: '/images/icon-arcade.svg',
	},
	{
		id: '2',
		name: 'Advanced',
		cost: {
			monthly: 12,
			yearly: 120,
		},
		monthsFree: 2,
		imageURL: '/images/icon-advanced.svg',
	},
	{
		id: '3',
		name: 'Pro',
		cost: {
			monthly: 15,
			yearly: 150,
		},
		monthsFree: 2,
		imageURL: '/images/icon-pro.svg',
	},
]

export default function Plans({
	formState,
	setFormState,
}: {
	formState: SubscriptionDetails
	setFormState: (value: SubscriptionDetails) => void
}) {
	const handleChangeSwitch = (yearly: boolean) => {
		setFormState({ ...formState, yearly })
	}

	const handleSelectPlan = (plan: PlanDetails) => {
		setFormState({ ...formState, plan })
	}

	return (
		<div>
			<h2 className='title'>Select your plan</h2>
			<p className='description'>
				You have the option of monthly or yearly billing.
			</p>
			<div className='plans'>
				{plans.map((plan) => {
					return (
						<button
							className={
								formState.plan && formState.plan.id === plan.id
									? 'plan-btn plan-btn-selected'
									: 'plan-btn'
							}
							key={plan.id}
							onClick={() => handleSelectPlan(plan)}
						>
							<div className='plan-inner-btn'>
								<div>
									<img className='plan-img' src={plan.imageURL} />
								</div>
								<div>
									<h2 className='plan-name'>{plan.name}</h2>
									<p className='plan-cost'>
										{formState.yearly && <>${plan.cost.yearly}/year</>}
										{!formState.yearly && <>${plan.cost.monthly}/month</>}
									</p>
									<p className='plan-free'>{plan.monthsFree} months free</p>
								</div>
							</div>
						</button>
					)
				})}
			</div>
			<div className='plan-switch-div'>
				Monthly
				<ReactSwitch checked={formState.yearly} onChange={handleChangeSwitch} />
				Yearly
			</div>
		</div>
	)
}
