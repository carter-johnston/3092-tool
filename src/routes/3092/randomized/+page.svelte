<script lang="ts">
	import RandomizedForm from './RandomizedForm.svelte';
	import type { ActionData } from './$types';
	import { Modal, P, Toast, Button } from 'flowbite-svelte';
	import { fly } from 'svelte/transition';

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
		<h5 class="text-center">CTO String(s):</h5>
		<div id="ctos">
			{#each form.ctoData as ctoString}
				<P class="text-sm mt-4">{ctoString.toString()}</P>
			{/each}
		</div>
		<svelte:fragment slot="footer">
			<Button id="copyBtn" on:click={copyToClipboard}>Copy to Clipboard</Button>
		</svelte:fragment>
		<div>
			{#if isCopied}
				<Toast color="green" position="bottom-right" transition={fly} params={{ x: 200 }}>
					<svelte:fragment slot="icon">
						<svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/></svg
						>
						<span class="sr-only">Check icon</span>
					</svelte:fragment>
					CTO Strings Successfully Copied
				</Toast>
			{/if}
			{#if notCopied}
				<Toast color="red" position="bottom-right" transition={fly} params={{ x: 200 }}>
					<svelte:fragment slot="icon">
						<svg
							aria-hidden="true"
							class="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						>
						<span class="sr-only">Error icon</span>
					</svelte:fragment>
					Unable to Copy to Clipboard. Please try again.
				</Toast>
			{/if}
		</div>
	</Modal>
{/if}
