import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { session } = await locals.auth.validateUser();
	if (session) throw redirect(302, '/');
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const username = form.get('username');
		const email = form.get('email');
		const password = form.get('password');

		try {
			const user = await auth.creteUser({
				primaryLey: {
					providerId: 'username',
					providerUserId: username,
					password
				},
				attributes: {
					email
				}
			});
			const session = await auth.createSession(user.userId);
			locals.auth.setSession(session);
		} catch {
			return fail(400);
		}
	}
};
