import { useLocation } from 'react-router'
import './Step.css'

export default function Step({
	step,
	url,
	display,
}: {
	step: number
	url: string
	display: string
}) {
	const location = useLocation()

	return (
		<div className='step-btn'>
			<div
				className={
					location.pathname === url
						? 'step-value step-value-active'
						: 'step-value'
				}
			>
				{step}
			</div>
			<div>
				<div className='step-label'>STEP {step}</div>
				<div className='step-name'>{display.toUpperCase()}</div>
			</div>
		</div>
	)
}
