<script>
	import { NavLi, NavUl, Navbar } from 'flowbite-svelte';
	import '../app.css';
	import { page } from '$app/stores';
	import { each } from 'svelte/internal';

	const navigation = [
		{ label: 'Home', href: '/' },
		{ label: '3092', href: '/3092' }
	];
</script>

<svelte:head>
	<title>BLSQA Automation Fun</title>
</svelte:head>

<nav class="bg-white shadow">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="block h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<svg
						class="hidden h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<img
						class="block h-8 w-auto lg:hidden"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
					<img
						class="hidden h-8 w-auto lg:block"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
				</div>
				<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
					<!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
					{#each navigation as nav}
						<a
							href={nav.href}
							class:active={$page.url.pathname === nav.href}
							class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:border-indigo-500 hover:text-gray-700 hover:border-b-2 active:border-indigo-900"
							>{nav.label}</a
						>
					{/each}
				</div>
			</div>
		</div>
	</div>
</nav>

<div class="w-full flex-grow px-2 sm:px-4">
	<div class="container mx-auto">
		<slot />
	</div>
</div>
