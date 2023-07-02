<script lang="ts">
	import { Label, Textarea, P, Hr, Button, Input } from 'flowbite-svelte';
</script>

<form method="POST">
	<div class="flex flex-col items-center">
		<div class="mb-6 justify-center">
			<Label for="name">CTO Grouping Name*</Label>
			<Input id="name" name="name" required />
		</div>
	</div>
	<div class="grid gap-6 mb-6 md:grid-cols-2">
		<div>
			<Label for="cert-cards">Cert Card IDs*</Label>
			<Textarea id="cert-cards" name="cert-cards" required />
			<span class="font-light text-sm">Cert Card ID's must be 10 digits. (Eg. 1234567890)</span>
		</div>
		<div>
			<Label for="certPins">Cert Card PINs*</Label>
			<Textarea id="certPins" name="certPins" required />
			<span class="font-light text-sm">Cert Card PINs must be 4 digits. (Eg. 1234)</span>
		</div>
		<div>
			<Label for="first-name">First Name*</Label>
			<Textarea id="first-name" name="first-name" required />
		</div>
		<div>
			<Label for="last-name">Last Name*</Label>
			<Textarea id="last-name" name="last-name" required />
		</div>
		<div>
			<Label for="ssn">SSN*</Label>
			<Textarea id="ssn" name="ssn" required />
			<span class="font-light text-sm">SSN's must be 9 digits. (Eg. 123456789)</span>
		</div>
		<div>
			<Label for="dob">DOB*</Label>
			<Textarea id="dob" name="dob" required />
			<span class="font-light text-sm"
				>DOB Format must be: YYYYMMDD. No hyphens or spaces. (Eg. 19900101)</span
			>
		</div>
		<div>
			<Label for="email">Email Address*</Label>
			<Textarea id="email" name="email" required />
		</div>
		<div>
			<Label for="addressLine1">Address Line 1*</Label>
			<Textarea id="addressLine1" name="addressLine1" required />
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
			<Label for="city">City*</Label>
			<Textarea id="city" name="city" required />
		</div>
		<div>
			<Label for="state">State*</Label>
			<Textarea id="state" name="state" required />
		</div>
		<div>
			<Label for="country">Country*</Label>
			<Textarea id="country" name="country" required />
		</div>
		<div>
			<Label for="zip">ZIP*</Label>
			<Textarea id="zip" name="zip" required />
		</div>
		<div>
			<Label for="homePhone">Home Phone*</Label>
			<Textarea id="homePhone" name="homePhone" required />
		</div>
		<div>
			<Label for="officePhone">Office Phone</Label>
			<Textarea id="officePhone" name="officePhone" />
		</div>
		<div>
			<Label for="mobilePhone">Mobile Phone*</Label>
			<Textarea id="mobilePhone" name="mobilePhone" required />
		</div>
	</div>
	<div class="mt-6 flex items-center justify-end gap-x-6">
		<div class="flex justify-end mt-10">
			<Button type="submit" color="blue">Submit</Button>
		</div>
	</div>
</form>
<Hr class="my-8" height="h-px" />
