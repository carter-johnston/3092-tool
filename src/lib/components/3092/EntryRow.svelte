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

<tr>
    <td bind:textContent={firstName} contenteditable>{firstName}</td>
    <td bind:textContent={firstName} contenteditable>{firstName}</td>
    <td bind:textContent={firstName} contenteditable>{firstName}</td>
    <td bind:textContent={firstName} contenteditable>{firstName}</td>
    <td bind:textContent={firstName} contenteditable>{firstName}</td>
    <td bind:textContent={firstName} contenteditable>{firstName}</td>
    <td bind:textContent={firstName} contenteditable>{firstName}</td>
    <td bind:textContent={firstName} contenteditable>{firstName}</td>
</tr>