<script lang="ts">
	import type { PageData } from './$types';
	import type { ActionData } from './$types';
	import ManualEntryForm from './ManualEntryForm.svelte';

	export let data: PageData;
	export let form: ActionData;
</script>

{#if form?.success}
	<h5 class="mt-4">CTO String(s):</h5>
	{#each form.ctoData as ctoString}
		<p class="text-sm mt-4 mb-4">{ctoString.toString()}</p>
	{/each}
{/if}

<ManualEntryForm />