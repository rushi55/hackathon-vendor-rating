<script>
	import { goto } from '$app/navigation'

	export let vendors
	let search

	const borderColorLookup = {
		Bad: 'border-error',
		Average: 'border-warning',
		Good: 'border-success'
	}

	const onVendorClick = ({ vendorId }) => {
		goto(`/vendors/${vendorId}`)
	}
</script>

<div class="form-control pt-5">
	<div class="input-group">
		<input type="text" placeholder="Search…" class="input input-bordered" bind:value={search} />
		<button class="btn btn-square btn-outline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
		</button>
	</div>
</div>

<div class="container m-auto grid grid-cols-3 gap-4 pt-5">
	{#each vendors as vendor (vendor.id)}
		<div
			class="card w-96 bg-base-100 shadow-xl"
			on:click={() => onVendorClick({ vendorId: vendor.id })}
		>
			<div class="card-body border-l-8 {borderColorLookup[vendor.performance]}">
				<h2 class="card-title">
					{vendor.name}
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
