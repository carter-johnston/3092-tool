<h1 class="text-3xl text-center mt-10">Random CTOs</h1>

<form method="POST">
	<div class="space-y-12 sm:space-y-16">
		<div
			class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0 sm:grid sm:grid-cols-2 justify-center"
		/>
	</div>
	<div class="sm:grid">
		<div class="sm:grid sm:items-center sm:gap-4 sm:py-6">
			<label for="cert-card" class="block text-sm font-medium leading-6 text-gray-900"
				>Cert Card ID</label
			>
			<div class="mt-2 sm:col-span-2 sm:mt-0">
				<input
					name="cert-card"
					id="cert-card"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:max-w-xs sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
		<div class="sm:grid sm:items-center sm:gap-4 sm:py-6">
			<label for="certPin" class="block text-sm font-medium leading-6 text-gray-900"
				>Cert Card PIN</label
			>
			<div class="mt-2 sm:col-span-2 sm:mt-0">
				<input
					name="certPin"
					id="certPin"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:max-w-xs sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
		<div class="sm:grid sm:items-center sm:gap-4 sm:py-6">
			<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
			<div class="mt-2 sm:col-span-2 sm:mt-0">
				<input
					name="email"
					id="email"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:max-w-xs sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
		<div class="sm:grid sm:items-center sm:gap-4 sm:py-6">
			<label for="cardNumber" class="block text-sm font-medium leading-6 text-gray-900"
				>Number of Cards to Generate</label
			>
			<div class="mt-2 sm:col-span-2 sm:mt-0">
				<input
					name="cardNumber"
					id="cardNumber"
					type="number"
					min="1"
					max="100"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 sm:max-w-xs sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
        <div>
            <button type="submit" class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Submit</button>
        </div>
	</div>
</form>
