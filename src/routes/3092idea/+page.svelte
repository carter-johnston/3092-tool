<script lang="ts">
	import Entry from '$lib/components/3092/Entry.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	type EntryProps = {
		firstname: string | undefined;
		lastname: string | undefined;
		ssn: string | undefined;
		email: string | undefined;
		address: string | undefined;
		city: string | undefined;
		state: string | undefined;
		zipcode: number | undefined;
	};

	let entries: EntryProps[] = [];

	$: console.log(entries);
</script>

<h1 class="text-3xl text-center mt-10">3092</h1>

<form method="POST">
	{#each entries as entry}
		<Entry {...entry} />
	{/each}

	<button
		on:click={() => {
			console.log('hello');
			entries.push({
				firstname: undefined,
				lastname: undefined,
				ssn: undefined,
				email: undefined,
				address: undefined,
				city: undefined,
				state: undefined,
				zipcode: undefined
			});
			entries = entries;
		}}
		type="button">New Entry</button
	>

	<div class="space-y-12 sm:space-y-16">
		<div class="mt-6 flex items-center justify-end gap-x-6">
			<button type="button" class="text-sm font-semibold leading-6 text-gray-900 mb-10">
				Cancel
			</button>
			<button
				type="submit"
				class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-10"
			>
				Submit
			</button>
		</div>
	</div>
</form>
