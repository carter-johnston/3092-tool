import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals, event }) => {
	const { user } = await locals.auth.validateUser();

	if (user?.role != 'Admin' && event?.url.pathname === '/register') {
		throw redirect(302, '/');
	}
	// // if (session) throw redirect(302, '/');
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');
		const role = form.get('role');

		// check for empty values
		if (typeof username !== 'string' || typeof password !== 'string') {
			return fail(400);
		}

		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'username',
					providerUserId: username,
					password
				},
				attributes: {
					username,
					role
				}
			});
			const session = await auth.createSession(user.userId);
			locals.auth.setSession(session);
		} catch {
			// username taken
			return fail(400);
		}
	}
};
