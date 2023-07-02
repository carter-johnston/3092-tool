// See https://kit.svelte.dev/docs/types#app

import type { Database } from '$lib/supabase-types';
import type { Session, SupabaseClient } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
			auth: import('lucia').AuthRequest;
		}
		interface PageData {
			session: Session | null;
		}
		// interface Platform {}
	}
	declare namespace Lucia {
		type Auth = import('$lib/server/lucia.js').Auth;
		type UserAttributes = {
			username: string;
		};
	}
}

export {};
