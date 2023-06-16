<script lang="ts">
	const navigation = [
		{ label: 'Manual Entry', href: 'manual-entry' },
		{ label: 'Randomized CTOs', href: 'randomized' }
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
