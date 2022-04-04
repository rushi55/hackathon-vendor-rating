<script>
	import { goto } from '$app/navigation'

	export let vendors

	const borderColorLookup = {
		Bad: 'border-error',
		Average: 'border-warning',
		Good: 'border-success'
	}

	const onVendorClick = ({ vendorId }) => {
		goto(`/vendors/${vendorId}`)
	}
</script>

<div class="container m-auto grid grid-cols-3 gap-4">
	{#each vendors as vendor (vendor.id)}
		<div
			class="card w-96 bg-base-100 shadow-xl"
			on:click={() => onVendorClick({ vendorId: vendor.id })}
		>
			<div class="card-body border-l-8 {borderColorLookup[vendor.performance]}">
				<h2 class="card-title">
					{vendor.name}
					<!-- <div class="badge badge-outline ml-1">{vendor.trade}</div> -->
				</h2>
				<p><span class="font-bold">City: </span>{vendor.city}</p>
				<p><span class="font-bold">Jobs Completed: </span>{vendor.jobs_completed}</p>
				<div class="card-actions justify-end">
					<div class="badge badge-outline">{vendor.trade}</div>
				</div>
			</div>
		</div>
	{/each}
</div>
