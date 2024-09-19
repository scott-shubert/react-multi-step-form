import './Confirmation.css'

export default function Confirmmation() {
	return (
		<div className='confirmation'>
			<img src='/images/icon-thank-you.svg' width={50} />
			<h1 className='thank-you'>Thank you!</h1>
			<p className='confirmation-text'>
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</p>
		</div>
	)
}
