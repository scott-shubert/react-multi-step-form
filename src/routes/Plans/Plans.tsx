import { useEffect, useState } from 'react'
import PlanButton from '../../components/PlanButton/PlanButton'
import Toggle from '../../components/Toggle/Toggle'
import { PlanDetails, SubscriptionDetails } from '../../interfaces'
import './Plans.css'
import axios from 'axios'

export default function Plans({
	formState,
	setFormState,
}: {
	formState: SubscriptionDetails
	setFormState: (value: SubscriptionDetails) => void
}) {
	useEffect(() => {
		axios.get('http://localhost:8080/api/plans').then((response) => {
			setPlans(response.data)
		})
	}, [])

	const [plans, setPlans] = useState([])

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
			<Toggle
				leftLabel='Monthly'
				rightLabel='Yearly'
				value={formState.yearly}
				handleChangeSwitch={handleChangeSwitch}
			/>
		</div>
	)
}
