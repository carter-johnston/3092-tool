import prisma from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log(await prisma.cto3092.findMany());
	const cto3092 = await prisma.cto3092.findMany();

	return {
		cto3092
	};
};
