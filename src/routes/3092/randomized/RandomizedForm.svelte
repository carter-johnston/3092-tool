<script lang="ts">
	import { Label, Input, Button, Hr } from 'flowbite-svelte';
</script>

<h1 class="text-3xl text-center mt-2 text-gray-700 dark:text-gray-400">Randomized CTOs</h1>
<Hr class="my-8" height="h-px" />

<form method="POST">
	<div class="grid gap-6 mb-6 md:grid-cols-2">
		<div>
			<Label for="cert-card" class="mb-2">Cert Card ID</Label>
			<Input type="text" id="cert-card" placeholder="123456789" required />
		</div>
		<div>
			<Label for="certPin" class="mb-2">Cert Card PIN</Label>
			<Input type="text" id="certPin" placeholder="1234" required />
		</div>
		<div>
			<Label for="email" class="mb-2">Email</Label>
			<Input type="text" id="email" placeholder="test@test.com" required />
		</div>
		<div>
			<Label for="cardNumber" class="mb-2">Number of Cards to Generate</Label>
			<Input type="number" id="email" min="1" max="100" required />
		</div>
	</div>
	<div class="flex justify-end mt-10">
		<Button type="submit" color="blue">Submit</Button>
	</div>
</form>

<Hr class="my-8" height="h-px" />
