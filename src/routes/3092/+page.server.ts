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

        const data : Data = {
            firstNames: String(formData.get('first-name')).split(','),
            lastNames: String(formData.get('last-name')).split(','),
            ssns: String(formData.get('ssn')).split(','),
            emails: String(formData.get('email')).split(','),
            addresses: String(formData.get('address')).split(','),
            cities: String(formData.get('city')).split(','),
            states: String(formData.get('state')).split(','),
            zipcodes: String(formData.get('zip')).split(','),
        }

        let newList : string[] = [];

        for(let i = 0; i < data.firstNames.length ; i++) {
            newList.push(
                [
                    data.firstNames[i],
                    data.lastNames[i],
                    data.ssns[i],
                    data.emails[i],
                    data.addresses[i],
                    data.cities[i],
                    data.states[i],
                    data.zipcodes[i],
                ].join(",")
            );
        }

		return {
			success: true,
            ctoData: newList,
		};
	}
};