<script lang="ts">
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	const navigation = [
		{ label: 'Dashboard', href: `/3092` },
		{ label: 'Manual Entry', href: `/3092/manual-entry` },
		{ label: 'Randomized CTOs', href: `/3092/randomized` },
		{ label: 'Parser', href: `/3092/parser` }
	];
</script>

<Navbar let:hidden let:toggle class="flex" data-sveltekit-reload>
	<NavUl {hidden} class="flex-1 flex justify-center mr-auto">
		{#each navigation as nav}
			<NavLi href={nav.href} active={$page.url.pathname === nav.href}>{nav.label}</NavLi>
		{/each}
	</NavUl>
</Navbar>

<div>
	<slot />
</div>
