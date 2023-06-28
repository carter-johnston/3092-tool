<script lang="ts">
	import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
	import type { PageData } from './$types';
</script>

<div class="py-20">
	<div class="flex w-full flex-col items-center">
		<Card class="mt-6 w-full" padding="xl" size="md">
			<form method="POST" class="flex flex-col space-y-6">
				<h3 class="text-xl font-medium text-gray-900 dark:text-white">Register new user</h3>
				<Label class="space-y-2">
					<span>Username</span>
					<Input
						type="text"
						id="username"
						name="username"
						placeholder="Enter a username"
						required
					/>
				</Label>
				<Label class="space-y-2">
					<span>Password</span>
					<Input
						type="password"
						id="password"
						name="password"
						placeholder="Enter a password"
						required
					/>
				</Label>
				<!-- <Label class="space-y-2">
					<span>Role</span>
					<Input type="text" id="role" name="role" placeholder="Enter" required />
				</Label> -->
				<Button type="submit" class="w-full">Create account</Button>
			</form>
		</Card>
	</div>
</div>
