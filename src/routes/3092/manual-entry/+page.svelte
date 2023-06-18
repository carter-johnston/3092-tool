<script lang="ts">
	import type { ActionData } from './$types';
	import { Label, Textarea, Hr, P, Button, Modal } from 'flowbite-svelte';
	import ManualEntryForm from './ManualEntryForm.svelte';

	export let form: ActionData;
</script>

<ManualEntryForm />

{#if form?.success}
	<Modal open size="xl" outsideclose>
		<h5 class="text-center">CTO String(s):</h5>
		{#each form.ctoData as ctoString}
			<P class="text-sm mt-4" id="ctos">{ctoString.toString()}</P>
		{/each}
		<svelte:fragment slot="footer">
			<Button id="copyBtn">Copy to Clipboard</Button>
		</svelte:fragment>
	</Modal>
{/if}
