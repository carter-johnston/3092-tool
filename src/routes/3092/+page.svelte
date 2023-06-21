<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import { Card, Button, P, Toast } from 'flowbite-svelte';

	export let data: PageData;
	let isCopied = false;
	let notCopied = false;

	async function copyToClipboard(i : number) {
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
				<Button on:click={() => {copyToClipboard(i)}} class="max-w-fit">Get CTOs</Button>
			</Card>
		{/each}
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
	</div>
</div>
