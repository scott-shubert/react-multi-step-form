export interface PlanDetails {
	id: string
	name: string
	cost: {
		monthly: number
		yearly: number
	}
	monthsFree: number
	imageURL: string
}

export interface AddOnDetails {
	id: string
	name: string
	cost: number
	description: string
	selected: boolean
}

export class SubscriptionDetails {
	name = ''
	email = ''
	phone = ''
	plan: PlanDetails | null = null
	addOns: AddOnDetails[] = []
	yearly = true
}
