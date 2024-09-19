import { useNavigate } from 'react-router'
import TextInput from '../../components/TextInput/TextInput'
import { SubscriptionDetails } from '../../interfaces'
import { paths } from '../Root/Root'
import { useForm, SubmitHandler } from 'react-hook-form'

export type FormValues = {
	name: string
	email: string
	phone: string
}

export default function Contact({
	formState,
	setFormState,
}: {
	formState: SubscriptionDetails
	setFormState: (value: SubscriptionDetails) => void
}) {
	const navigate = useNavigate()
	const { control, handleSubmit } = useForm<FormValues>({
		defaultValues: {
			name: formState.name,
			email: formState.email,
			phone: formState.phone,
		},
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		const { name, email, phone } = data
		setFormState({ ...formState, name, email, phone })
		navigate(paths[1].value)
	}

	return (
		<div>
			<h2 className='title'>Personal Info</h2>
			<p className='description'>
				Please provide your name, email address, and phone number.
			</p>
			<div>
				<form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
					<TextInput
						placeholder='Steven King'
						label='Name'
						control={control}
						name='name'
						rules={{ required: 'Name is Required' }}
					/>
					<TextInput
						placeholder='stevenking@gmail.com'
						label='Email Address'
						control={control}
						name='email'
						rules={{
							required: 'Email is Required',
							pattern: {
								value: /^[^@]+@[^@]+\.[^@]+$/,
								message: 'Invalid Format',
							},
						}}
					/>
					<TextInput
						placeholder='123-555-1234'
						label='Phone Number'
						control={control}
						name='phone'
						rules={{
							required: 'Phone Number is Required',
							pattern: {
								value: /^(\(\d{3}\)|\d{3})-?\d{3}-?\d{4}$/,
								message: 'Invalid Format',
							},
						}}
					/>
				</form>
			</div>
		</div>
	)
}
