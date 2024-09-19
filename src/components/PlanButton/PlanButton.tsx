import { PlanDetails, SubscriptionDetails } from '../../interfaces'
import './PlanButton.css'

export default function PlanButton({
	formState,
	plan,
	handleSelectPlan,
}: {
	formState: SubscriptionDetails
	plan: PlanDetails
	handleSelectPlan: (plan: PlanDetails) => void
}) {
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
}
