import { render, screen } from '@testing-library/react'
import Summary from '../../routes/Summary/Summary'
import { SubscriptionDetails } from '../../interfaces'
import { testSubscription } from '../../sampleData'
import { MemoryRouter } from 'react-router'

const subscription: SubscriptionDetails = testSubscription

describe('summary', () => {
	beforeEach(() => {
		subscription.addOns.forEach((addon) => (addon.selected = false))
		subscription.yearly = true
	})

	function setup() {
		render(
			<MemoryRouter>
				<Summary formState={subscription} />
			</MemoryRouter>
		)
	}

	it('should display per year, with 1 addon', () => {
		subscription.addOns[0].selected = true

		setup()
		const prices = screen.getAllByText(/\/yr/i)
		const termLabel = screen.getByText(/Per Year/i)

		expect(prices.length).toEqual(3)
		expect(termLabel).toBeDefined()
	})

	it('should display per month, with 2 addons', () => {
		subscription.addOns[0].selected = true
		subscription.addOns[1].selected = true
		subscription.yearly = false

		setup()
		const prices = screen.getAllByText(/\/mo/i)
		const termLabel = screen.getByText(/Per Month/i)

		expect(prices.length).toEqual(4)
		expect(termLabel).toBeDefined()
	})
})
