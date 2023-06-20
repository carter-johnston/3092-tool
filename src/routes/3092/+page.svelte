<script lang="ts">
	import type { PageData } from './$types';
	import { Card } from 'flowbite-svelte';

	export let data: PageData;
</script>

<h1 class="text-3xl text-center mt-2 mb-2 text-gray-700 dark:text-gray-400">Dashboard</h1>

<div>
	{#each data.cto3092 as ctos}
		<Card class="max-w-fit">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{ctos.name}
			</h5>
			<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
				{ctos.cto}
			</p>
		</Card>
	{/each}
</div>
