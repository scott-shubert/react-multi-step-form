import { paths } from '../routes/root'
import Step from './step'

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
