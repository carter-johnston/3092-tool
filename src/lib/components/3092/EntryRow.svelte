<script lang="ts">
	export let index: number;

	export let data: {
		firstName: string;
		lastName: string;
		ssn: string;
		email: string;
		country: string;
		address: string;
		city: string;
		state: string;
		zipcode: number;
	};

	let ssnLeft = 0;
	let ssnMid = 0;
	let ssnRight = 0;

	// TODO add constants files
	const countries: { name: string; initial: string }[] = [
		{ name: 'Afghanistan', initial: 'AF' },
		{ name: 'Åland Islands', initial: 'AX' },
		{ name: 'Albania', initial: 'AL' }
	];
	const states: { name: string; initial: string }[] = [
		{ name: 'Florida', initial: 'FL' },
		{ name: 'Georgia', initial: 'GA' }
	];
	const cities: string[] = ['Jacksonville', 'Tampa', 'Miami'];

	$: ssn = `${ssnLeft}-${ssnMid}-${ssnRight}`;
</script>

<tr class="">
	<th scope="row">{index}</th>
	<td class="px-6 py-0" bind:textContent={data.firstName} contenteditable>{data.firstName}</td>
	<td class="px-6 py-0" bind:textContent={data.lastName} contenteditable>{data.lastName}</td>
	<td class="flex flex-row px-2 py-0">
		<div class="flex-none w-20">
			<input bind:value={ssnLeft} type="number" />
		</div>
		<div class="flex-none w-20">
			<input bind:value={ssnMid} type="number" />
		</div>
		<div class="flex-none w-20">
			<input bind:value={ssnRight} type="number" />
		</div>
	</td>
	<td class="px-6 py-0" bind:textContent={data.email} contenteditable>{data.email}</td>
	<td class="px-6 py-0" bind:textContent={data.country} contenteditable>{data.country}</td>
	<td class="px-6 py-0" bind:textContent={data.address} contenteditable>{data.address}</td>
	<td class="px-6 py-0" bind:textContent={data.city} contenteditable>{data.city}</td>
	<td class="px-6 py-0" bind:textContent={data.state} contenteditable>{data.state}</td>
	<td class="px-6 py-0"><input bind:value={data.zipcode} type="number" /></td>
</tr>
