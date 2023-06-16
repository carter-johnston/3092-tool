<script lang="ts">
	import EntryRow from '$lib/components/3092/EntryRow.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let entries: any[] = [];

	$: console.log(entries);
</script>


<div class="container mx-10 mt-10">

        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
		<thead class="text-xs text-gray-700 uppercase bg-indigo-100 dark:bg-gray-700 dark:text-gray-400">
			<tr>
                <th scope="col" class="px-6 py-1">#</th>
				<th scope="col" class="px-6 py-1">First Name</th>
				<th scope="col" class="px-6 py-1">Last Name</th>
				<th scope="col" class="px-6 py-1">Social Security No.</th>
				<th scope="col" class="px-6 py-1">Email</th>
				<th scope="col" class="px-6 py-1">Country</th>
				<th scope="col" class="px-6 py-1">Address</th>
				<th scope="col" class="px-6 py-1">City</th>
				<th scope="col" class="px-6 py-1">State</th>
				<th scope="col" class="px-6 py-1">Zipcode</th>
			</tr>
		</thead>
		<tbody>
            {#each entries as entry, index}
            <EntryRow {index} bind:data={entry} />
			{/each}
		</tbody>
	</table>
    
	<div class="space-y-12 sm:space-y-16">
        <div class="mt-6 flex items-center justify-start gap-x-6">
            <button
            class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-10"
            type="button"
            on:click={() => {
                entries.push({
                    firstName: '',
                    lastName: '',
                    ssn: '',
                    email: '',
                    country: '',
						address: '',
						city: '',
						state: '',
						zipcode: 0
					});
					entries = entries;
				}}
			>
            + New Row
        </button>
    </div>
</div>

<div class="container mx-auto bg-red px-4">
    {#each entries as entry}
    <p>{entry.firstName},{entry.lastName},{entry.ssn},{entry.email},{entry.country},{entry.address},{entry.city},{entry.state},{entry.zipcode}</p>
	{/each}
</div>

</div>