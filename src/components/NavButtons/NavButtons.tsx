import { useNavigate } from 'react-router'
import { paths } from '../../routes/Root/Root'

export default function NavButtons({ currentStep }: { currentStep: string }) {
	const navigate = useNavigate()

	const handleNavigate = (offset: number) => {
		const index = paths.findIndex((path) => path.value === currentStep)
		if (index + offset >= 0 && index + offset < paths.length)
			navigate(paths[index + offset].value)
	}

	return (
		<>
			{currentStep !== '/' && (
				<div className='nav-buttons-both'>
					{currentStep !== '/' && (
						<>
							<button
								className='btn-secondary'
								onClick={() => {
									handleNavigate(-1)
								}}
							>
								Go Back
							</button>
							<button
								className='btn-primary'
								onClick={() => {
									handleNavigate(1)
								}}
							>
								{currentStep === '/summary' ? 'Confirm' : 'Next Step'}
							</button>
						</>
					)}
				</div>
			)}
			{currentStep === '/' && (
				<div className='nav-buttons-single'>
					<button form='contact-form' type='submit' className='btn-primary'>
						Next Step
					</button>
				</div>
			)}
		</>
	)
}
