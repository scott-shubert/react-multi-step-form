import { render, screen } from '@testing-library/react'
import { SubscriptionDetails } from '../../interfaces'
import { MemoryRouter } from 'react-router'
import Contact from '../../routes/Contact/Contact'
import { userEvent } from '@testing-library/user-event'
import NavButtons from '../../components/NavButtons/NavButtons'
import '@testing-library/jest-dom'

let subscription: SubscriptionDetails = new SubscriptionDetails()

describe('contact', () => {
	beforeEach(() => {
		subscription = new SubscriptionDetails()
	})

	function setup() {
		render(
			<MemoryRouter>
				<Contact
					formState={subscription}
					setFormState={(updatedSubscription) => {
						subscription = updatedSubscription
					}}
				/>
				<NavButtons currentStep='/' />
			</MemoryRouter>
		)

		return {
			alerts: screen.getAllByRole('alert'),
			nextBtn: screen.getByRole('button', { name: /Next/i }),
			nameField: screen.getByLabelText(/Name/i),
			emailField: screen.getByLabelText(/Email/i),
			phoneField: screen.getByLabelText(/Phone/i),
		}
	}

	it('should display three alerts for the empty required fields after clicking next', async () => {
		const { alerts, nextBtn } = setup()

		expect(alerts.length).toBe(3)
		expect(alerts[0]).toHaveTextContent('')
		expect(alerts[1]).toHaveTextContent('')
		expect(alerts[2]).toHaveTextContent('')

		const user = userEvent.setup()
		await user.click(nextBtn)

		expect(alerts[0]).toHaveTextContent(/Required/i)
		expect(alerts[1]).toHaveTextContent(/Required/i)
		expect(alerts[2]).toHaveTextContent(/Required/i)
	})

	it('should not display any alerts after clicking next', async () => {
		subscription.name = 'tester'
		subscription.email = 'test@abc.com'
		subscription.phone = '5551234567'
		const { alerts, nextBtn } = setup()

		const user = userEvent.setup()
		await user.click(nextBtn)

		expect(alerts.length).toBe(3)
		expect(alerts[0]).toHaveTextContent('')
		expect(alerts[1]).toHaveTextContent('')
		expect(alerts[2]).toHaveTextContent('')
	})

	it('should display 3 alerts after clicking next, then hide them after entering data', async () => {
		const { alerts, nextBtn, nameField, emailField, phoneField } = setup()

		const user = userEvent.setup()
		await user.click(nextBtn)

		expect(alerts[0]).toHaveTextContent(/Required/i)
		expect(alerts[1]).toHaveTextContent(/Required/i)
		expect(alerts[2]).toHaveTextContent(/Required/i)

		await user.type(nameField, 'tester')
		await user.type(emailField, 'test@abc.com')
		await user.type(phoneField, '5551234567')

		expect(alerts[0]).toHaveTextContent('')
		expect(alerts[1]).toHaveTextContent('')
		expect(alerts[2]).toHaveTextContent('')
	})
})
