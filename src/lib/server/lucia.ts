import lucia from 'lucia-auth';
import prismaAdapter from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';
import { sveltekit } from 'lucia-auth/middleware';
import prisma from '$lib/server/prisma';

export const auth = lucia({
	adapter: prismaAdapter(prisma),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	transformDatabaseUser: (userData) => {
		return {
			userId: userData.id,
			email: userData.email,
			name: userData.name
		};
	}
});

export type Auth = typeof auth;
