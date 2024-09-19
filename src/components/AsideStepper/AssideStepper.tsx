import { paths } from '../../routes/Root/Root'
import Step from '../Step/Step'
import './AssideStepper.css'

export default function AssideStepper() {
	return (
		<aside className='card-steps'>
			{paths.map((path, index) => {
				if (index < 4)
					return (
						<Step
							key={index}
							step={index + 1}
							url={path.value}
							display={path.label}
						></Step>
					)
			})}
		</aside>
	)
}
