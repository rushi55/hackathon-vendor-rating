<script>
	import { goto } from '$app/navigation'
	import Resources from '../../components/vendor-detail/Resources.svelte'
	import Claims from '../../components/vendor-detail/Claims.svelte'
	import Costs from '../../components/vendor-detail/Costs.svelte'
	import Delays from '../../components/vendor-detail/Delays.svelte'
	import Overview from '../../components/vendor-detail/Overview.svelte'

	export let vendor
	export let tab

	const tabs = ['overview', 'delays', 'costs', 'claims', 'resources', 'documents']
</script>

<div class="container m-auto px-10 mt-10">
	<button class="btn btn-square btn-outline btn-sm mb-5" on:click={() => goto('/')}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#000000"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="hover:stroke-white"><path d="M19 12H6M12 5l-7 7 7 7" /></svg
		></button
	>
	<div class="flex justify-between">
		<h1 class="text-4xl mb-7">{vendor.name}</h1>
		<h4 class="flex">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#000000"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><path
					d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
				/><circle cx="12" cy="10" r="3" /></svg
			> Prescott, AZ
		</h4>
	</div>

	<div class="flex">
		<div class="tabs">
			{#each tabs as t}
				<a class="tab tab-lg tab-lifted capitalize {tab === t && 'tab-active'}" href="?tab={t}"
					>{t}</a
				>
			{/each}
		</div>
		<div class="border-b flex-grow" />
	</div>

	<div class="mx-3">
		{#if tab === 'overview'}
			<Overview {vendor} />
		{/if}
		{#if tab === 'delays'}
			<Delays />
		{/if}
		{#if tab === 'costs'}
			<Costs />
		{/if}
		{#if tab === 'claims'}
			<Claims />
		{/if}
		{#if tab === 'resources'}
			<Resources />
		{/if}
		{#if tab === 'documents'}
			<div>documents</div>
		{/if}
	</div>
</div>
