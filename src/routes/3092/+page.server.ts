import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	console.log(await prisma.cto3092.findMany());
	const cto3092 = await prisma.cto3092.findMany({
		select: {
			name: true,
			cto: true
		}
	});

	return {
		cto3092
	};
};
