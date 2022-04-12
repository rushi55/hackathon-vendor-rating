<script>
	import EyeIcon from '../EyeIcon.svelte'
</script>

<div class="container mx-auto pt-2 flex">
	<div class="inline-block">
		<div class="stats stats-vertical shadow">
			<div class="stat">
				<div class="stat-title">Total Claims</div>
				<div class="stat-value">5</div>
				<div class="stat-desc">↗︎ +1 (last month)</div>
			</div>
		</div>
	</div>
	<div class="overflow-x-auto w-full ml-5">
		<table class="table w-full">
			<!-- head -->
			<thead>
				<tr>
					<th>Lot</th>
					<th>Date</th>
					<th>Description</th>
					<th>Warranty Work</th>
					<th>Cost</th>
					<th />
				</tr>
			</thead>
			<tbody>
				<!-- row 1 -->
				<tr class="hover">
					<td>JA003</td>
					<td>03/01/2022</td>
					<td>Broken Sink</td>
					<td>Pre-Close</td>
					<td>$500</td>
					<td> <button class="btn btn-circle btn-ghost btn-sm"> <EyeIcon /></button></td>
				</tr>
				<!-- row 2 -->
				<tr class="hover">
					<td>JA045</td>
					<td>02/25/2022</td>
					<td>No Closet</td>
					<td>Post-Close</td>
					<td>$300</td>
					<td> <button class="btn btn-circle btn-ghost btn-sm"> <EyeIcon /></button></td>
				</tr>
				<!-- row 3 -->
				<tr class="hover">
					<td>BH009</td>
					<td>02/20/2022</td>
					<td>Water Leak (basement)</td>
					<td>Pre-Close</td>
					<td>$1200</td>
					<td> <button class="btn btn-circle btn-ghost btn-sm"> <EyeIcon /></button></td>
				</tr>
				<tr class="hover">
					<td>JA021</td>
					<td>01/31/2022</td>
					<td>Missing Garage</td>
					<td>Pre-Close</td>
					<td>$4000</td>
					<td> <button class="btn btn-circle btn-ghost btn-sm"> <EyeIcon /></button></td>
				</tr>
				<tr class="hover">
					<td>BH033</td>
					<td>01/15/2022</td>
					<td>Broken Granite</td>
					<td>Post-Close</td>
					<td>$2000</td>
					<td> <button class="btn btn-circle btn-ghost btn-sm"> <EyeIcon /></button></td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
