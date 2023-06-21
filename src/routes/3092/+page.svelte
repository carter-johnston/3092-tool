<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import { Card, Button, P, Alert } from 'flowbite-svelte';

	export let data: PageData;
	let isCopied = false;
	let notCopied = false;

	async function copyToClipboard(i: number) {
		const text = document.getElementById(`ctos${i}`)!.innerText;

		try {
			const copiedText = await navigator.clipboard.writeText(text);
			isCopied = true;
			return copiedText;
		} catch (e) {
			notCopied = true;
			console.error('e', e);
		}
	}

	$: console.log(data);
</script>

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

<h1 class="text-3xl text-center mt-2 mb-2 text-gray-700 dark:text-gray-400">Dashboard</h1>
<P class="text-center text-gray-700 dark:text-gray-400 mb-10"
	>This the 3092 Dashboard. This page stores every single manual card entry grouping that has been
	created. Use the search to find a group of CTOs you would like to reuse.</P
>

<div class="w-auto">
	<div class="max-w-max">
		{#each data.cto3092Grouped as ctoStringList, i}
			<Card class="mb-10 max-w-screen-2xl">
				<h5
					class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
				>
					{ctoStringList[0].groupingName}
				</h5>
				<div id="ctos{i}">
					{#each ctoStringList as { certCardId, certPin, firstName, lastName, addressLine1, addressLine2, addressLine3, city, state, country, zip, dob, ssn, email, homePhone, officePhone, mobilePhone }, j}
						<p class="font-normal text-sm text-gray-700 dark:text-gray-400 leading-tight mb-5">
							3092,{certCardId},{certPin},,,{lastName},{firstName},,,{addressLine1},{addressLine2},{addressLine3},{city},{state},{country},{zip},{dob},{ssn},,,,{email},{homePhone},{officePhone},{mobilePhone},,,,,,,,,,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,Y,{state},,,,Card
							Creation
						</p>
					{/each}
				</div>
				<Button
					on:click={() => {
						copyToClipboard(i);
					}}
					class="max-w-fit">Get CTOs</Button
				>
			</Card>
		{/each}
	</div>
</div>
