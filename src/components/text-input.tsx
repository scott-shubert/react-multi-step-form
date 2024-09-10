import { useId } from 'react'

export default function TextInput({
	label,
	placeholder,
	type,
	state,
	onStateChange,
}: {
	label: string
	placeholder: string
	type: string
	state: string
	onStateChange: (value: string) => void
}) {
	const id = useId()

	return (
		<div>
			<label className='input-label' htmlFor={id}>
				{label}
			</label>
			<div>
				<input
					required={true}
					className='text-input'
					id={id}
					type={type}
					placeholder={placeholder}
					value={state}
					onChange={(event) => onStateChange(event.target.value)}
				/>
			</div>
		</div>
	)
}
