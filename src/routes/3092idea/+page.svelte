<script lang="ts">
	import EntryRow from "$lib/components/3092/EntryRow.svelte";
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

	let entries: string[] = [];

	$: console.log(entries);
</script>

<h1 class="text-3xl text-center mt-10">3092</h1>

<form method="POST">

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">First Name</th>
                <th scope="col" class="px-6 py-3">Last Name</th>
                <th scope="col" class="px-6 py-3">Social Security No.</th>
                <th scope="col" class="px-6 py-3">Email</th>
                <th scope="col" class="px-6 py-3">Address</th>
                <th scope="col" class="px-6 py-3">City</th>
                <th scope="col" class="px-6 py-3">State</th>
                <th scope="col" class="px-6 py-3">Zipcode</th>
            </tr>
        </thead>
        <tbody>
            {#each entries as entry}
                <EntryRow />
            {/each}
        </tbody>
    </table>

	<div class="space-y-12 sm:space-y-16">
		<div class="mt-6 flex items-center justify-end gap-x-6">
			<button class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-10"
                    type="button"
                    on:click={() => {
                        console.log('hello');
                        entries.push("");
                        entries = entries;
                    }}>
				+ New Row
			</button>
		</div>
	</div>
</form>
