import PlanButton from '../PlanButton/PlanButton'
import { PlanDetails, SubscriptionDetails } from '../../interfaces'
import dataFetch from '../../util/suspense/dataFetch'
import { plansPromise } from '../../util/suspense/plansPromise'

const resource = dataFetch(plansPromise)

export default function PlanSelect({
	formState,
	setFormState,
}: {
	formState: SubscriptionDetails
	setFormState: (value: SubscriptionDetails) => void
}) {
	const plans: PlanDetails[] = resource.result.read()

	const handleSelectPlan = (plan: PlanDetails) => {
		setFormState({ ...formState, plan })
	}

	return (
		<div className='plans'>
			{plans.map((plan, index) => {
				return (
					<PlanButton
						key={'PlanButtoon' + index}
						formState={formState}
						plan={plan}
						handleSelectPlan={handleSelectPlan}
					/>
				)
			})}
		</div>
	)
}
