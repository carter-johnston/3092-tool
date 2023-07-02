<script lang="ts">
	import RandomizedForm from './RandomizedForm.svelte';
	import type { ActionData } from './$types';
	import { Modal, P, Toast, Button, Alert } from 'flowbite-svelte';

	export let form: ActionData;

	let isCopied = false;
	let notCopied = false;

	async function copyToClipboard() {
		const text = document.getElementById('ctos')!.innerText;

		try {
			const copiedText = await navigator.clipboard.writeText(text);
			isCopied = true;
			return copiedText;
		} catch (e) {
			notCopied = true;
			console.error('e', e);
		}
	}
</script>

<RandomizedForm />
{#if form?.success}
	<Modal open size="xl" outsideclose>
		<div>
			{#if isCopied}
				<Alert color="green" dismissable>
					<svg
						slot="icon"
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							clip-rule="evenodd"
						/></svg
					>
					CTO Strings successfully copied to clipboard.
				</Alert>
			{/if}
			{#if notCopied}
				<Alert color="red" dismissable>
					<svg
						slot="icon"
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							clip-rule="evenodd"
						/></svg
					>
					Issue copying CTO Strings. Please try again.
				</Alert>
			{/if}
		</div>
		<h5 class="text-center">CTO String(s):</h5>
		<div id="ctos">
			{#each form.ctoData as ctoString}
				<P class="text-sm mt-4">{ctoString.toString()}</P>
			{/each}
		</div>
		<svelte:fragment slot="footer">
			<Button id="copyBtn" on:click={copyToClipboard}>Copy to Clipboard</Button>
		</svelte:fragment>
	</Modal>
{/if}
