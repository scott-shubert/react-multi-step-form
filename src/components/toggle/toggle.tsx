import './Toggle.css'

export default function Toggle({
	leftLabel,
	rightLabel,
	value,
	handleChangeSwitch,
}: {
	leftLabel: string
	rightLabel: string
	value: boolean
	handleChangeSwitch: () => void
}) {
	return (
		<div className='toggle-div'>
			{leftLabel}
			<label className='toggle'>
				<input type='checkbox' checked={value} onChange={handleChangeSwitch} />
				<span className='toggle-switch'></span>
			</label>
			{rightLabel}
		</div>
	)
}
