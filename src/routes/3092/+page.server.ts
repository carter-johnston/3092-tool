import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	const { session } = await locals.auth.validateUser();
	if (!session) throw redirect(302, '/login');

	const cto3092 = await prisma.cto3092.findMany();
	console.log(cto3092);

	return {
		cto3092
	};
};
