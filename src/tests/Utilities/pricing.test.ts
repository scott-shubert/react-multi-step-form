import { SubscriptionDetails } from '../../interfaces'
import { plans, testSubscription } from '../../sampleData'
import { calculateTotal } from '../../util/pricing'

describe('Pricing Util tests', () => {
	let subscription: SubscriptionDetails = testSubscription

	beforeEach(() => {
		subscription = {
			...subscription,
			plan: plans[0],
			yearly: true,
		}
		subscription.addOns.forEach((addOn) => (addOn.selected = false))
	})

	it('should calculate yearly price with no addons', () => {
		expect(calculateTotal(subscription)).toBe(90)
	})

	it('should calculate yearly price with all addons', () => {
		subscription.addOns.forEach((addOn) => (addOn.selected = true))
		expect(calculateTotal(subscription)).toBe(150)
	})

	it('should calculate monthly price with one addon', () => {
		subscription.addOns[0].selected = true
		subscription.plan = plans[2]
		subscription.yearly = false
		expect(calculateTotal(subscription)).toBe(17)
	})
})
