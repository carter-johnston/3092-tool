import { auth } from '$lib/server/lucia';
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);

	const { user } = await event.locals.auth.validateUser();

	// if (dev || event.url.pathname === '/' || event.url.pathname === '/login') {
	// 	return await resolve(event);
	// }

	// if (user.role != 'Admin' && event.url.pathname === '/register') {
	// 	throw redirect(302, '/');
	// }

	return await resolve(event);
};
