import type { Actions, PageServerLoad } from './$types';

const users = [
	{
		firstName: ['Dhori', 'Emmy'],
		lastName: ['Mato', 'Makic']
	}
];

export const load: PageServerLoad = async () => {
	return {
		users
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const firstName = formData.get('first-name').split(',');
		const lastName = formData.get('last-name').split(',');
		const ssn = formData.get('ssn').split(',');
		const email = formData.get('email').split(',');
		const address = formData.get('address').split(',');
		const city = formData.get('city').split(',');
		const state = formData.get('state').split(',');
		const zip = formData.get('zip').split(',');

		const user = {
			firstName,
			lastName,
			ssn,
			email,
			address,
			city,
			state,
			zip
		};

		users.push(user);
		console.log(users);

		// users.forEach((x) => {
		// 	console.log(x.firstName);
		// });

		const newArray = users.map((x) => {
			return x.firstName + x.lastName;
		});

		console.log(newArray);

		return {
			success: true
		};
	}
};
