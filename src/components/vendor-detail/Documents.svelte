<script>
	import Dropzone from 'svelte-file-dropzone'
</script>

<div class="container mx-auto pt-2">
	<div class="w-full h-32">
		<Dropzone on:drop={() => {}} containerClasses="h-full flex items-center justify-center" />
	</div>
</div>
