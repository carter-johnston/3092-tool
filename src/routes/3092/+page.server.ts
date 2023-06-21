import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	// const { session } = await locals.auth.validateUser();
	// if (!session) throw redirect(302, '/login');

	const cto3092List = await prisma.cto3092.findMany();
	let cto3092Grouped = cto3092List.reduce((group, cto) => {
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
