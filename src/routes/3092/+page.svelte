<script lang="ts">
	import type { PageData } from './$types';
	import { Card } from 'flowbite-svelte';

	export let data: PageData;

	$: console.log(data);
</script>

<h1 class="text-3xl text-center mt-2 mb-2 text-gray-700 dark:text-gray-400">Dashboard</h1>

<div class="w-auto">
	{#each data.cto3092Grouped as ctoStringList}
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			{ctoStringList[0].groupingName}
		</h5>
		{#each ctoStringList as { groupingName, firstName, lastName }}
			<Card class="max-w-max">
				<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
					{firstName},{lastName}
				</p>
			</Card>
		{/each}
	{/each}
</div>
