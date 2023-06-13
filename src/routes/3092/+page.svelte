<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-3xl text-center mt-10">3092</h1>

<form method="POST">
	<div class="space-y-12 sm:space-y-16">
		<div>
			<h2 class="text-base font-semibold leading-7 text-gray-900 text-center mt-5">
				Users information
			</h2>
			<div
				class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0"
			>
				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
					<label
						for="first-name"
						class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">First name</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<textarea
							name="first-name"
							id="first-name"
							autocomplete="given-name"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
					<label for="last-name" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>Last name</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<textarea
							name="last-name"
							id="last-name"
							autocomplete="family-name"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
					<label for="ssn" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>SSN</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<textarea
							name="ssn"
							id="ssn"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
					<label for="email" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>Email address</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<textarea
							id="email"
							name="email"
							autocomplete="email"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<!-- 
				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
					<label for="country" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>Country</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<select
							id="country"
							name="country"
							autocomplete="country-name"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
						>
							<option>United States</option>
							<option>Canada</option>
							<option>Mexico</option>
						</select>
					</div>
				</div>
            -->
				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
					<label
						for="street-address"
						class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>Street address</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<textarea
							name="address"
							id="address"
							autocomplete="street-address"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xl sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
					<label for="city" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>City</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<textarea
							name="city"
							id="city"
							autocomplete="address-level2"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
					<label for="region" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>State / Province</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<textarea
							name="state"
							id="state"
							autocomplete="address-level1"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
					<label
						for="postal-code"
						class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>ZIP / Postal code</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<textarea
							name="zip"
							id="zip"
							autocomplete="postal-code"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-6 flex items-center justify-end gap-x-6">
		<button type="button" class="text-sm font-semibold leading-6 text-gray-900 mb-10">Cancel</button
		>
		<button
			type="submit"
			class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-10"
			>Submit</button
		>
	</div>
</form>
