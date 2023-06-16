<script lang="ts">
	export let index: number;

	export let firstName: string = '';
	export let lastName: string = '';
	export let ssn: string = '';
	export let email: string = '';
	export let country: string = '';
	export let address: string = '';
	export let city: string = '';
	export let state: string = '';
	export let zipcode: number = 0;

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
	<td class="px-6 py-0" bind:textContent={firstName} contenteditable>{firstName}</td>
	<td class="px-6 py-0" bind:textContent={lastName} contenteditable>{lastName}</td>
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
	<td class="px-6 py-0" bind:textContent={email} contenteditable>{email}</td>
	<td class="px-6 py-0" bind:textContent={country} contenteditable>{country}</td>
	<td class="px-6 py-0" bind:textContent={address} contenteditable>{address}</td>
	<td class="px-6 py-0" bind:textContent={city} contenteditable>{city}</td>
	<td class="px-6 py-0" bind:textContent={state} contenteditable>{state}</td>
	<td class="px-6 py-0"><input bind:value={zipcode} type="number" /></td>
</tr>
