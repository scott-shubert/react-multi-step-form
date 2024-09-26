import { SubscriptionDetails } from '../interfaces'

export function calculateTotal(subscription: SubscriptionDetails): number {
	let total = 0
	if (subscription.yearly) {
		total = subscription.plan!.cost.yearly

		for (const addon of subscription.addOns) {
			if (addon.selected) total += addon.cost.yearly
		}
	} else {
		total = subscription.plan!.cost.monthly

		for (const addon of subscription.addOns) {
			if (addon.selected) total += addon.cost.monthly
		}
	}
	return total
}
