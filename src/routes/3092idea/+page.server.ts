import type { Actions, PageServerLoad } from './$types';

const users = [
	{
		firstName: ['Dhori', 'Emmy'],
		lastName: ['Mato', 'Makic']
	}
];

type Data = {
    firstNames : string[];
    lastNames : string[]; 
    ssns : string[];
    emails : string[];
    addresses: string[];
    cities : string[];
    states : string[];
    zipcodes : string[];
}

type Entry = {
    ctoList: string[]
}

export const load: PageServerLoad = async () => {
	return {
		users
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
        // ASSUME form data is passed if a req is made (frontend can handle validation)

        const mappedFromFormData : Data = {
            firstNames: String(formData.get('first-name')).split(','),
            lastNames: String(formData.get('last-name')).split(','),
            ssns: String(formData.get('ssn')).split(','),
            emails: String(formData.get('email')).split(','),
            addresses: String(formData.get('address')).split(','),
            cities: String(formData.get('city')).split(','),
            states: String(formData.get('state')).split(','),
            zipcodes: String(formData.get('zip')).split(','),
        }
        // // Loop thru data and construct cto strings
        // let counter = 0;
        // while () {

        // }

        

		return {
			success: true,
            // entry,
		};
	}
};

// const firstNameList = formData.get('first-name').split(',');
// const lastNameList = formData.get('last-name').split(',');
// const ssnList = formData.get('ssn').split(',');
// const emailList = formData.get('email').split(',');
// const addressList = formData.get('address').split(',');
// const cityList = formData.get('city').split(',');
// const stateList = formData.get('state').split(',');
// const zipList = formData.get('zip').split(',');
