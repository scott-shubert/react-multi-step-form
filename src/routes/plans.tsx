import PlanButton from '../components/PlanButton/PlanButton'
import Toggle from '../components/toggle/toggle'
import { PlanDetails, SubscriptionDetails } from '../interfaces'
import { plans } from '../sampleData'

export default function Plans({
	formState,
	setFormState,
}: {
	formState: SubscriptionDetails
	setFormState: (value: SubscriptionDetails) => void
}) {
	const handleChangeSwitch = () => {
		setFormState({ ...formState, yearly: !formState.yearly })
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
						<PlanButton
							formState={formState}
							plan={plan}
							handleSelectPlan={handleSelectPlan}
						/>
					)
				})}
			</div>
			<Toggle
				leftLabel='Monthly'
				rightLabel='Yearly'
				value={formState.yearly}
				handleChangeSwitch={handleChangeSwitch}
			/>
		</div>
	)
}
