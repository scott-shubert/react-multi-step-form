import Toggle from '../../components/Toggle/Toggle'
import { SubscriptionDetails } from '../../interfaces'
import './Plans.css'
import { lazy, Suspense } from 'react'
import LoadingPlans from '../../components/PlanSelect/LoadingPlans'

const PlanSelect = lazy(() => import('../../components/PlanSelect/PlanSelect'))

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

	return (
		<div>
			<h2 className='title'>Select your plan</h2>

			<p className='description'>
				You have the option of monthly or yearly billing.
			</p>

			<div className='plan-display'>
				<Suspense fallback={<LoadingPlans />}>
					<PlanSelect formState={formState} setFormState={setFormState} />
				</Suspense>
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
