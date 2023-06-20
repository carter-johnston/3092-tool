<script lang="ts">
	import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
</script>

<div class="py-20">
	<div class="flex w-full flex-col items-center">
		<Card class="mt-6 w-full" padding="xl" size="md">
			<form method="POST" class="flex flex-col space-y-6">
				<h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
				<Label class="space-y-2">
					<span>Username</span>
					<Input type="text" name="username" placeholder="username" required />
				</Label>
				<Label class="space-y-2">
					<span>Your password</span>
					<Input type="password" name="password" placeholder="•••••" required />
				</Label>
				<Button type="submit" class="w-full">Login to your account</Button>
			</form>
		</Card>
	</div>
</div>
