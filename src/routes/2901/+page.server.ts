import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

type Data = {
	card: string[];
	amount: number;
	transNum: number;
	reference: string[];
};

type Entry = {
	ctoList: string[];
};

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(302, '/login');
	return {
		user
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const data: Data = {
			card: String(formData.get('card')).split(','),
			amount: String(formData.get('amount')).split(','),
			transNum: Number(formData.get('total') - 1),
			reference: String(formData.get('reference'))
		};

		const cto: string[] = [];

		for (let i = 0; i <= data.transNum; i++) {
			for (let i = 0; i < data.amount.length; i++) {
				cto.push(['2901', data.card, data.amount[i], data.reference].join(','));
			}
		}

		return {
			success: true,
			ctoData: cto
		};
	}
};
