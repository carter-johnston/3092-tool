<script lang="ts">
	import type { PageData } from './$types';
	import { Card, Button, P, Alert, Search } from 'flowbite-svelte';
	import XLSX from 'xlsx';
	import { DateTime } from 'luxon';

	export let data: PageData;
	let isCopied = false;
	let notCopied = false;
	let searchTerm = '';
    let grouping: { [key: string]: any[] };


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

	function searchByGroupingName(searchTerm: string) {
		grouping = data.cto3092Grouped;
		grouping = grouping.filter((item) =>
			item[0].groupingName.toUpperCase().includes(searchTerm.toUpperCase())
		);
	}

	function exportToExcel(grouping: string[][]) {

        
		// dataset is an aoa getting passed into our sheetjs method
		const dataset = [];

		// get the header
		dataset.push(Object.keys(grouping[0]));

		// for eah row of the grouping, make an array of its values.
		grouping.forEach((g) => {
			dataset.push(Object.values(g));
		});

		generateExcelSheet(dataset);
	}

	function generateExcelSheet(dataset: string[][]) {
		// create a worksheet
		let ws = XLSX.utils.aoa_to_sheet(dataset);

		// multiple sheets can make a workbook
		let wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, `sheet_1`);

		// write file to browser. this is what initiates the download.
		// second param is the filename
		XLSX.writeFileXLSX(wb, `${DateTime.now().toFormat('yyyy_LLL_dd')}.xlsx`);
	}

	if (data) {
		grouping = data.cto3092Grouped;
	}

	$: searchByGroupingName(searchTerm);
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

<Search
	size="md"
	bind:value={searchTerm}
	placeholder="Search CTOs by typing in Grouping name"
	class="mb-10 dark:bg-gray-800"
/>

<div class="w-full">
	<div>
		{#each grouping as ctoStringList, i}
			<Card class="mb-10 min-w-full md:width-auto">
				<h5
					class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
				>
					{ctoStringList[0].groupingName}
				</h5>
				<div id="ctos{i}">
					{#each ctoStringList as { certCardId, certPin, firstName, lastName, addressLine1, addressLine2, addressLine3, city, state, country, zip, dob, ssn, email, homePhone, officePhone, mobilePhone }, j}
						<p class="font-normal text-sm text-gray-700 dark:text-gray-400 leading-tight mb-5">
							3092,{certCardId},,,,{lastName},{firstName},,,{addressLine1},{addressLine2},{addressLine3},{city},{state},{country},{zip},{dob},{ssn},,,,{email},{homePhone},{officePhone},{mobilePhone},,,,,,,,,,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,Y,{state},,,,Card
							Creation
						</p>
					{/each}
				</div>
				<div class="flex gap-3">
					<Button
						on:click={() => {
							copyToClipboard(i);
						}}
						class="max-w-fit">Copy CTOs</Button
					>
					<Button
						color="alternative"
						on:click={() => {
							exportToExcel(ctoStringList);
						}}
						class="max-w-fit justify-end">Export to Excel</Button
					>
				</div>
			</Card>
		{/each}
	</div>
</div>
