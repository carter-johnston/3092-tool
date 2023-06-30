<script lang="ts">
	import { P, Hr, Label, Textarea, Button } from 'flowbite-svelte';
	import Papa, { type ParseResult } from 'papaparse';
	import { browser } from '$app/environment';
	import { each } from 'svelte/internal';

	let csvString: any;
	let cardIds: any[] = [];

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
			console.log(dataString);
			console.log(cardIds);
		}

		return cardIds;
	}

	$: cardIds;
</script>

<h1 class="text-3xl text-center mt-2 mb-2 text-gray-700 dark:text-gray-400">CTO Parser</h1>
<P class="text-center text-gray-700 dark:text-gray-400"
	>Copy and Paste the successful 3092 string into the parser and it will retrieve the card ID's for
	you.</P
>
<Hr class="my-8" height="h-px" />

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
		<Button type="submit" color="blue" on:click={parseCSV}>Parse</Button>
	</div>
</div>
<div>
	{#each cardIds as card, i (card)}
		<p>{card}</p>
	{/each}
</div>
