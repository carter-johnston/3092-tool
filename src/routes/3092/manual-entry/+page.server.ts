import type { Actions, PageServerLoad } from './$types';

const users = [
	{
		firstName: ['Dhori', 'Emmy'],
		lastName: ['Mato', 'Makic']
	}
];

type Data = {
	certCardIds: string[];
	certPins: string[];
	firstNames: string[];
	lastNames: string[];
	addressLine1: string[];
	addressLine2: string[];
	addressLine3: string[];
	countries: string[];
	dobs: string[];
	homePhones: string[];
	officePhones: string[];
	mobilePhones: string[];
	ssns: string[];
	emails: string[];
	cities: string[];
	states: string[];
	zipcodes: string[];
};

type Entry = {
	ctoList: string[];
};

export const load: PageServerLoad = async () => {
	return {
		users
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const certCard = formData.get('cert-cards');
		// ASSUME form data is passed if a req is made (frontend can handle validation)

		const data: Data = {
			certCardIds: String(formData.get('cert-cards')).split(','),
			certPins: String(formData.get('certPins')).split(','),
			lastNames: String(formData.get('last-name')).split(','),
			firstNames: String(formData.get('first-name')).split(','),
			addressLine1: String(formData.get('addressLine1')).split(','),
			addressLine2: String(formData.get('addressLine2')).split(','),
			addressLine3: String(formData.get('addressLine3')).split(','),
			cities: String(formData.get('city')).split(','),
			states: String(formData.get('state')).split(','),
			countries: String(formData.get('country')).split(','),
			zipcodes: String(formData.get('zip')).split(','),
			dobs: String(formData.get('dob')).split(','),
			ssns: String(formData.get('ssn')).split(','),
			emails: String(formData.get('email')).split(','),
			homePhones: String(formData.get('homePhone')).split(','),
			officePhones: String(formData.get('officePhone')).split(','),
			mobilePhones: String(formData.get('mobilePhone')).split(',')
		};

		const newList: string[] = [];

		for (let i = 0; i < data.firstNames.length; i++) {
			newList.push(
				[
					'3092',
					data.certCardIds[i],
					data.certPins[i],
					',',
					data.lastNames[i],
					data.firstNames[i],
					',',
					data.addressLine1[i],
					data.addressLine2[i],
					data.addressLine3[i],
					data.cities[i],
					data.states[i],
					data.countries[i],
					data.zipcodes[i],
					data.dobs[i],
					data.ssns[i],
					'',
					'',
					'',
					data.emails[i],
					data.homePhones[i],
					data.officePhones[i],
					data.mobilePhones[i],
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'1',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'Y',
					data.states[i],
					'',
					'',
					'',
					'Card Creation'
				].join(',')
			);
		}

		return {
			success: true,
			ctoData: newList
		};
	}
};
