'use strict'
import express from 'express'
import path from 'path'

const app = express()
const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, '/dist')))

const PORT = 8080
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`)
	console.log('Press Ctrl+C to quit.')
})

app.get('/api/plans', (req, res) => {
	res.send(getPlans())
})

app.get('/api/addons', (req, res) => {
	res.send(getAddOns())
})

function getPlans() {
	return [
		{
			id: '1',
			name: 'Arcade',
			cost: {
				monthly: 10,
				yearly: 90,
			},
			monthsFree: 2,
			imageURL: '/images/icon-arcade.svg',
		},
		{
			id: '2',
			name: 'Advanced',
			cost: {
				monthly: 12,
				yearly: 120,
			},
			monthsFree: 2,
			imageURL: '/images/icon-advanced.svg',
		},
		{
			id: '3',
			name: 'Pro',
			cost: {
				monthly: 15,
				yearly: 150,
			},
			monthsFree: 2,
			imageURL: '/images/icon-pro.svg',
		},
	]
}

function getAddOns() {
	return [
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
}
