import { useNavigate } from 'react-router'
import TextInput from '../components/text-input'
import { SubscriptionDetails } from '../interfaces'
import { paths } from './root'

export default function Contact({
	formState,
	setFormState,
}: {
	formState: SubscriptionDetails
	setFormState: (value: SubscriptionDetails) => void
}) {
	const navigate = useNavigate()

	const handleNameChange = (name: string) => {
		setFormState({ ...formState, name })
	}

	const handleEmailChange = (email: string) => {
		setFormState({ ...formState, email })
	}

	const handlePhoneChange = (phone: string) => {
		setFormState({ ...formState, phone })
	}

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault()
		navigate(paths[1].value)
	}

	return (
		<div>
			<h2 className='title'>Personal Info</h2>
			<p className='description'>
				Please provide your name, email address, and phone number.
			</p>
			<div>
				<form id='contact-form' onSubmit={handleSubmit}>
					<TextInput
						label='Name'
						placeholder='e.g. Stephen King'
						type='text'
						state={formState.name}
						onStateChange={(value) => handleNameChange(value)}
					/>
					<TextInput
						label='Email Address'
						placeholder='e.g. sking@gmail.com'
						type='email'
						state={formState.email}
						onStateChange={(value) => handleEmailChange(value)}
					/>
					<TextInput
						label='Phone Number'
						placeholder='e.g. +1 614 312 1641'
						type='tel'
						state={formState.phone}
						onStateChange={(value) => handlePhoneChange(value)}
					/>
				</form>
			</div>
		</div>
	)
}
