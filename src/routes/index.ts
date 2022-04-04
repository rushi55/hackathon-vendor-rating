import { getRandomNumber } from '../utils/getRandomNumber'

export const get = async () => {
	const numOfVendors = 10

	const vendorsToCreate = [...Array(numOfVendors).keys()]

	const performanceRating = ['Bad', 'Average', 'Good']

	const trades = ['Plumbing', 'HVAC', 'Windows']

	const cities = ['Phoenix', 'Prescott', 'Denver', 'Dallas']

	const vendors = vendorsToCreate.map(v => ({
		id: v,
		name: `Vendor ${v}`,
		jobs_completed: getRandomNumber(100),
		trade: trades[getRandomNumber(3)],
		city: cities[getRandomNumber(4)],
		performance: performanceRating[getRandomNumber(3)]
	}))

	return { body: { vendors } }
}
