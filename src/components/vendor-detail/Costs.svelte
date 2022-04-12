<script>
	import Chart from 'svelte-frappe-charts'
	import DaisyuiColors from 'daisyui/src/colors/themes'

	let data = {
		labels: ['Wood', 'Brick', 'Cement', 'Tile', 'Glass'],
		datasets: [
			{
				name: 'Budgeted',
				values: [10000, 5000, 2000, 10000, 22000]
			},
			{
				name: 'Actual',
				values: [10000, 4000, 2000, 18000, 30000]
			}
		]
	}
</script>

<div class="container mx-auto pt-2 flex">
	<div class="inline-block">
		<div class="stats stats-vertical shadow">
			<div class="stat">
				<div class="stat-title">Budgeted</div>
				<div class="stat-value">$45,000</div>
			</div>

			<div class="stat text-error">
				<div class="stat-title">Current Expenses</div>
				<div class="stat-value">$50,000</div>
				<div class="stat-desc">↗︎ +$5,000</div>
			</div>
		</div>
	</div>
	<div class="flex-grow as">
		<div class="flex-grow ml-5">
			<h1 class="text-xl ml-7">Material Costs</h1>
			<Chart
				{data}
				type="bar"
				lineOptions={{ regionFill: 1 }}
				colors={[
					DaisyuiColors['[data-theme=winter]'].primary,
					DaisyuiColors['[data-theme=winter]'].accent
				]}
			/>
		</div>
	</div>
</div>
