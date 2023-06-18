<script lang="ts">
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	const navigation = [
		{ label: 'Manual Entry', href: `${$page.url.pathname}/manual-entry` },
		{ label: 'Static Row Entry', href: `${$page.url.pathname}/row-entry` },
		{ label: 'Randomized CTOs', href: `${$page.url.pathname}/randomized` }
	];
</script>

<Navbar let:hidden let:toggle class="flex">
	<NavUl {hidden} class="flex-1 flex justify-center mr-auto">
		{#each navigation as nav}
			<NavLi href={nav.href} active={$page.url.pathname === nav.href}>{nav.label}</NavLi>
		{/each}
	</NavUl>
</Navbar>

<div>
	<slot />
</div>
