export interface Cost {
	monthly: number
	yearly: number
}
export interface PlanDetails {
	id: string
	name: string
	cost: Cost
	monthsFree: number
	imageURL: string
}

export interface AddOnDetails {
	id: string
	name: string
	cost: Cost
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
