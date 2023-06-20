<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		Chevron,
		DropdownDivider,
		Button,
		DarkMode
	} from 'flowbite-svelte';
	import type { LayoutData, PageData } from './$types';

	const navigation = [
		{ label: 'Home', href: '/' },
		{ label: '3092', href: '/3092' }
	];

	export let data: PageData;
</script>

<svelte:head>
	<title>BLSQA Automation Fun</title>
</svelte:head>

<Navbar let:hidden let:toggle class="drop-shadow">
	{#if !data.user}
		<div class="flex md:order-2 items-end justify-end">
			<Button size="sm" href="/login" type="button">Login</Button>
		</div>
	{:else}
		<div class="flex md:order-2">
			<DarkMode class="mr-4" />
			<form method="POST">
				<Button size="sm" formaction="/logout" type="submit">Logout</Button>
				<NavHamburger on:click={toggle} />
			</form>
		</div>
		<NavUl {hidden}>
			<NavLi href="/">Home</NavLi>
			<NavLi id="nav-menu1" class="cursor-pointer"><Chevron aligned>CTOs</Chevron></NavLi>
			<Dropdown triggeredBy="#nav-menu1" class="w-44 z-20">
				{#each navigation as nav}
					<DropdownItem href={nav.href}>{nav.label}</DropdownItem>
				{/each}
			</Dropdown>
		</NavUl>
	{/if}
</Navbar>

<div class="w-full flex-grow px-2 sm:px-4">
	<div class="container mx-auto">
		<slot />
	</div>
</div>
