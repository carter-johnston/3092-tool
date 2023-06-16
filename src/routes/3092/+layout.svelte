<script lang="ts">
	import { page } from '$app/stores';
	const navigation = [
		{ label: 'Manual Entry', href: `${$page.url}/manual-entry` },
		{ label: 'Randomized CTOs', href: `${$page.url}/randomized` }
	];
</script>

<nav>
	{#each navigation as nav}
		<a href={nav.href}>{nav.label}</a>
	{/each}
</nav>

<div>
	<slot />
</div>
