<script lang="ts">
	import { P, Hr, Label, Textarea, Button, Modal, Card, Alert } from 'flowbite-svelte';
	import Papa, { type ParseResult } from 'papaparse';
	import { browser } from '$app/environment';

	let csvString: any;
	let cardIds: string[] = [];
	let showModal = false;

	let isCopied = false;
	let notCopied = false;

	async function copyToClipboard() {
		const text = document.getElementById('cards')!.innerText;

		try {
			const copiedText = await navigator.clipboard.writeText(text);
			isCopied = true;
			return copiedText;
		} catch (e) {
			notCopied = true;
			console.error('e', e);
		}
	}

	async function parseCSV() {
		if (browser) {
			csvString = (document.getElementById('cto') as HTMLInputElement)!.value;
			const dataString: any = Papa.parse(csvString, {
				header: true,
				skipEmptyLines: true,
				complete: function (results) {
					console.log('Parsing complete:', results);
				}
			});

			for (let i = 0; i < dataString.data.length; i++) {
				cardIds.push(dataString.data[i].cardid);
			}
		}

		cardIds = cardIds;

		return cardIds;
	}
</script>

<h1 class="text-3xl text-center mt-2 mb-2 text-gray-700 dark:text-gray-400">CTO Parser</h1>
<P class="text-center text-gray-700 dark:text-gray-400">
	Copy and Paste the successful 3092 string into the parser and it will retrieve the card ID's for
	you.
</P>
<Hr class="my-8" height="h-px" />

<div class="mb-10">
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
			Card IDs Successfully Copied!
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
<div>
	<Label for="cto">CTO String</Label>
	<Textarea
		id="cto"
		name="cto"
		rows="10"
		required
		value={'response,message,cardid,custid,expiration'}
	/>
</div>
<div class="mt-6 flex items-center justify-end gap-x-6">
	<div class="flex justify-end mt-10">
		<Button type="button" color="blue" on:click={parseCSV}>Parse</Button>
	</div>
</div>

{#if cardIds.length > 0}
	<div>
		<h4 class="mb-5">Card IDs:</h4>
		<Card>
			<div id="cards">
				{#each cardIds as card, i}
					{card}<br />
				{/each}
			</div>
			<Button class="mt-8" on:click={copyToClipboard}>Copy to Clipboard</Button>
		</Card>
	</div>
{/if}
