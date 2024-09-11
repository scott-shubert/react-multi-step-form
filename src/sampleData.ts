import { AddOnDetails } from './interfaces'

export const allAddOns: AddOnDetails[] = [
	{
		id: '1',
		name: 'Online Service',
		cost: {
			monthly: 2,
			yearly: 20,
		},
		description: 'Access to multiplayer games',
		selected: false,
	},
	{
		id: '2',
		name: 'Larger Storage',
		cost: {
			monthly: 3,
			yearly: 30,
		},
		description: 'Extra 1TB of cloud saves',
		selected: false,
	},
	{
		id: '3',
		name: 'Custom Profile Theme',
		cost: {
			monthly: 1,
			yearly: 10,
		},
		description: 'Custom theme on your profile',
		selected: false,
	},
]
