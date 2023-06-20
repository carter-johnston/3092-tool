import { auth } from '$lib/server/lucia';
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve, locals }) => {
	event.locals.auth = auth.handleRequest(event);

	if (event.url.pathname === '/register') {
		if (event.locals.auth.role !== 'Admin') {
			throw redirect(302, '/');
		}
	}

	return await resolve(event);
};
