<script lang="ts">
	export let firstName: string = '';
	export let lastName: string | undefined = '';
	export let ssn: string | undefined = '';
	export let email: string | undefined = '';
	export let country: string | undefined = '';
	export let address: string | undefined = '';
	export let city: string | undefined = '';
	export let state: string | undefined = '';
	export let zipcode: number | undefined = 0;

	let ssnLeft: string;
	let ssnMid: string;
	let ssnRight: string;

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

<div class="border-solid border-2 rounded-lg border-slate-300 m-2 p-5">
	<div class="flex flex-row h-8">
		<!-- firstName -->
		<div class="" />
		<input placeholder="first name" bind:value={firstName} type="text" />

		<!-- lastName -->
		<input placeholder="last name" bind:value={lastName} type="text" />

		<!-- ssn -->
		<div class="flex flex-row w-100">
			<input bind:value={ssnLeft} type="number" />
			<input bind:value={ssnMid} type="number" />
			<input bind:value={ssnRight} type="number" />
		</div>

		<!-- email -->
		<input placeholder="email" bind:value={email} type="text" />

		<!-- Country -->
		<select bind:value={country} name="country-select" id="country-select">
			{#each countries as country}
				<option value={country.name}>{country.name}</option>
			{/each}
		</select>

		<!-- Address -->
		<input placeholder="address" bind:value={address} type="text" />

		<!-- City -->
		<select class="text-sm" bind:value={city} name="city-select" id="city-select">
			{#each cities as city}
				<option value={city}>{city}</option>
			{/each}
		</select>

		<!-- State -->
		<select bind:value={state} name="city-select" id="city-select">
			{#each states as state}
				<option value={state.name}>{state.name}</option>
			{/each}
		</select>

		<!-- Zipcode -->
		<input bind:value={zipcode} type="number" />
	</div>
</div>

<!-- Delete Row -->
<!-- <button class="text-sm font-semibold leading-6 text-gray-900 mb-10" type="button">-</button> -->
