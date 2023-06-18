<script lang="ts">
	import RandomizedForm from './RandomizedForm.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<RandomizedForm />
{#if form?.success}
	<!-- svelte-ignore missing-declaration -->
	<h5 class="mt-4">CTO String(s):</h5>
	{#each form.ctoData as ctoString}
		<p class="text-sm mt-4 mb-4">{ctoString.toString()}</p>
	{/each}
{/if}
