<script>
	import Chart from 'svelte-frappe-charts'
	import DaisyuiColors from 'daisyui/src/colors/themes'
	import { goto } from '$app/navigation'

	export let vendor
	export let tab

	const getRatingStyle = ({ rating }) => {
		if (rating <= 40) return 'text-error'
		if (rating >= 70) return 'text-success'
		return 'text-warning'
	}

	let data = {
		labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
		datasets: [
			{
				name: 'Jobs',
				values: [10, 12, 3, 9, 8, 15, 9]
			},
			{
				name: 'Claims',
				values: [1, 1, 0, 0, 2, 0, 0].reverse()
			},
			{
				name: 'Delays',
				values: [1, 1, 0, 0, 2, 0, 0]
			}
		]
	}

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
	<h1 class="text-4xl mb-7">{vendor.name}</h1>
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
			<div class="container mx-auto pt-2 flex">
				<div class="stats stats-vertical shadow">
					<div class="stat">
						<div class="stat-title">Jobs Completed</div>
						<div class="stat-value">45</div>
						<div class="stat-desc">Jan 1st - April 1st</div>
					</div>

					<div class="stat">
						<div class="stat-title">Rating</div>
						<div
							class="radial-progress {getRatingStyle({ rating: vendor.rating })} my-1"
							style="--value:{vendor.rating};"
						>
							{vendor.rating}%
						</div>
						<div class="stat-desc">+22% last month</div>
					</div>

					<div class="stat">
						<div class="stat-title">Monthly Resources</div>
						<div class="stat-value">~9</div>
						<div class="stat-desc">↘︎ 1 (-10%)</div>
					</div>
					<div class="stat">
						<div class="stat-title">Claims</div>
						<div class="stat-value">12</div>
						<div class="stat-desc">↗︎ 2 (+20%)</div>
					</div>
				</div>
				<div class="flex-grow as">
					<h1 class="text-xl ml-7">Weekly Performance</h1>
					<Chart
						{data}
						type="line"
						height={500}
						lineOptions={{ regionFill: 1 }}
						colors={[
							DaisyuiColors['[data-theme=winter]'].success,
							DaisyuiColors['[data-theme=winter]'].warning,
							DaisyuiColors['[data-theme=winter]'].error
						]}
					/>
				</div>
			</div>
		{/if}
		{#if tab === 'delays'}
			<div>delays</div>
		{/if}
		{#if tab === 'costs'}
			<div>costs</div>
		{/if}
		{#if tab === 'claims'}
			<div>claims</div>
		{/if}
		{#if tab === 'resources'}
			<div>resources</div>
		{/if}
		{#if tab === 'documents'}
			<div>documents</div>
		{/if}
	</div>
</div>
