import { Outlet, useLocation } from 'react-router'
import NavButtons from '../../components/NavButtons/NavButtons'
import AssideStepper from '../../components/AsideStepper/AssideStepper'

export const paths = [
	{ value: '/', label: 'Your Info' },
	{ value: '/plans', label: 'Select Plan' },
	{ value: '/add-ons', label: 'Add-Ons' },
	{ value: '/summary', label: 'Summary' },
	{ value: '/confirmation', label: 'Confirmation' },
]

export default function Root() {
	const location: any = useLocation()
	return (
		<div className='main-body'>
			<div className='form-card'>
				<AssideStepper />
				<main className='card-content'>
					<Outlet />
					{location.pathname !== '/confirmation' && (
						<NavButtons currentStep={location.pathname} />
					)}
				</main>
			</div>
		</div>
	)
}
