import prisma from '$lib/server/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(302, '/login');

	const cto3092List = await prisma.cto3092.findMany();

	let cto3092Grouped = cto3092List.reduce((group: { [key: string]: any[] }, cto) => {
		const { groupingName } = cto;
		group[groupingName] = group[groupingName] ?? [];
		group[groupingName].push(cto);
		return group;
	}, {});

	cto3092Grouped = Object.values(cto3092Grouped);

	return {
		cto3092Grouped
	};
};
