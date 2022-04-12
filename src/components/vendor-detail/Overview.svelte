<script>
	import Chart from 'svelte-frappe-charts'
	import DaisyuiColors from 'daisyui/src/colors/themes'

    export let vendor

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
</script>

<div class="container mx-auto pt-2 flex">
	<div class="stats stats-vertical shadow">
		<div class="stat">
			<div class="stat-title">Jobs Completed</div>
			<div class="stat-value">45</div>
			<div class="stat-desc">Jan 1st - Current</div>
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
