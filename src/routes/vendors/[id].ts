import type { RequestHandler } from '@sveltejs/kit'
import { getRandomNumber } from '../../utils/getRandomNumber'

type Params = { id: string }

export type Vendor = {
	id: number
	name: string
	rating: number
}

export type OutputType = {
	vendor: Vendor
	tab: string
}

export const get: RequestHandler<Params, OutputType> = async ({ params, url }) => {
	const tab: string = url?.searchParams?.get('tab') || 'overview'

	const vendor: Vendor = {
		id: +params.id,
		name: `Vendor ${params.id}`,
		rating: getRandomNumber(100)
	}

	return { body: { vendor, tab } }
}
