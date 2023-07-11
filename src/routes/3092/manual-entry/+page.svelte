<script lang="ts">
	import type { ActionData } from './$types';
	import { Hr, P, Button, Modal, Alert } from 'flowbite-svelte';
    import XLSX from 'xlsx';
    import { DateTime } from 'luxon';
	import ManualEntryForm from './ManualEntryForm.svelte';

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

    function exportToExcel(grouping: string[] | undefined) {
        if(!grouping) {
            grouping = [];
        }
        // this is just like the other export function except the cto string needs to be parsed.
        const mappedGroup = grouping.map(cto => cto.split(","));

		const dataset = [];
		dataset.push(Object.keys(mappedGroup[0]));
		mappedGroup.forEach((g) => {
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
</script>

<Alert color="yellow">
	<span class="font-medium">IMPORTANT!</span> Please make grouping name meaningful for future reference.
</Alert>

<h1 class="text-3xl text-center mt-2 mb-2 text-gray-700 dark:text-gray-400">Manual Entry</h1>
<P class="text-center text-gray-700 dark:text-gray-400"
	>Please enter in cardholder info, separated by a comma, no spaces, if you are adding multiple.</P
>
<Hr class="my-8" height="h-px" />
<P class="mb-5 text-center" weight="light" color="text-gray-500 dark:text-gray-400"
	>Form labels that are denoted with an * are required fields. Please fill them out.</P
>

<P class="mb-5 text-center" weight="light" color="text-gray-500 dark:text-gray-400" />

<ManualEntryForm />

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
			<Button id="copyBtn" on:click={() => {exportToExcel(form?.ctoData)}}>Export to Excel</Button>
		</svelte:fragment>
	</Modal>
{/if}
