import { useId } from 'react'
import { useController, UseControllerProps } from 'react-hook-form'
import './TextInput.css'
import { FormValues } from '../../routes/Contact/Contact'

export default function TextInput({
	label,
	placeholder,
	...props
}: { label: string; placeholder: string } & UseControllerProps<FormValues>) {
	const id = useId()
	const { field, fieldState } = useController(props)
	return (
		<div>
			<label className='input-label' htmlFor={id}>
				{label}
			</label>
			<div className='input-container'>
				<input
					{...field}
					className='text-input'
					id={id}
					placeholder={placeholder}
				/>
				<p className='error-text' role='alert'>
					{fieldState.error?.message}
				</p>
			</div>
		</div>
	)
}
