import type { RequestHandler } from '@sveltejs/kit'

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
		rating: 73
		// rating: getRandomNumber(100)
	}

	return { body: { vendor, tab } }
}
