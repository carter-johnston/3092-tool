<script lang="ts">
	import { Label, Textarea, P, Hr, Button, Input } from 'flowbite-svelte';
</script>

<h1 class="text-3xl text-center mt-2 mb-2 text-gray-700 dark:text-gray-400">Manual Entry</h1>
<P class="text-center text-gray-700 dark:text-gray-400"
	>Please enter in cardholder info, separated by a comma if you are adding multiple.</P
>
<Hr class="my-8" height="h-px" />

<form method="POST">
	<div class="flex flex-col items-center">
		<div class="mb-6 justify-center">
			<Label for="name">CTO Grouping Name</Label>
			<Input id="name" name="name" />
		</div>
	</div>
	<div class="grid gap-6 mb-6 md:grid-cols-2">
		<div>
			<Label for="cert-cards">Cert Card IDs</Label>
			<Textarea id="cert-cards" name="cert-cards" />
		</div>
		<div>
			<Label for="certPins">Cert Card PINs</Label>
			<Textarea id="certPins" name="certPins" />
		</div>
		<div>
			<Label for="first-name">First Name</Label>
			<Textarea id="first-name" name="first-name" />
		</div>
		<div>
			<Label for="last-name">Last Name</Label>
			<Textarea id="last-name" name="last-name" />
		</div>
		<div>
			<Label for="ssn">SSN</Label>
			<Textarea id="ssn" name="ssn" />
		</div>
		<div>
			<Label for="dob">DOB</Label>
			<Textarea id="dob" name="dob" />
		</div>
		<div>
			<Label for="email">Email Address</Label>
			<Textarea id="email" name="email" />
		</div>
		<div>
			<Label for="addressLine1">Address Line 1</Label>
			<Textarea id="addressLine1" name="addressLine1" />
		</div>
		<div>
			<Label for="addressLine2">Address Line 2</Label>
			<Textarea id="addressLine2" name="addressLine2" />
		</div>
		<div>
			<Label for="addressLine3">Address Line 3</Label>
			<Textarea id="addressLine3" name="addressLine3" />
		</div>
		<div>
			<Label for="city">City</Label>
			<Textarea id="city" name="city" />
		</div>
		<div>
			<Label for="state">State</Label>
			<Textarea id="state" name="state" />
		</div>
		<div>
			<Label for="country">Country</Label>
			<Textarea id="country" name="country" />
		</div>
		<div>
			<Label for="zip">ZIP</Label>
			<Textarea id="zip" name="zip" />
		</div>
		<div>
			<Label for="homePhone">Home Phone</Label>
			<Textarea id="homePhone" name="homePhone" />
		</div>
		<div>
			<Label for="officePhone">Office Phone</Label>
			<Textarea id="officePhone" name="officePhone" />
		</div>
		<div>
			<Label for="mobilePhone">Mobile Phone</Label>
			<Textarea id="mobilePhone" name="mobilePhone" />
		</div>
	</div>
	<div class="mt-6 flex items-center justify-end gap-x-6">
		<div class="flex justify-end mt-10">
			<Button type="submit" color="blue">Submit</Button>
		</div>
	</div>
</form>
<Hr class="my-8" height="h-px" />
