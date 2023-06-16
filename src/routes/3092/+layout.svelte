<script lang="ts">    
	const navigation = [
		{ label: 'Manual Entry', href: `manual-entry` },
		{ label: 'Static Row Entry', href: `row-entry` },
		{ label: 'Randomized CTOs', href: `randomized` }
	];
</script>

<nav>
    <h1 class="text-3xl ml-3 mt-5">3092</h1>

    <div class="my-2">
	{#each navigation as nav}
        <a class="mx-3" href="/3092/{nav.href}">{nav.label}</a>
    {/each}
    </div>
</nav>

<div>
	<slot />
</div>
