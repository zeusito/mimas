import { redirect, type RequestEvent } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import { kindeAuthClient, type SessionManager } from '@kinde-oss/kinde-auth-sveltekit';

export const load: LayoutServerLoad = async (event: RequestEvent) => {
	const isAuthenticated = await kindeAuthClient.isAuthenticated(
		event.request as unknown as SessionManager
	);

	if (!isAuthenticated) {
		throw redirect(303, '/api/auth/login');
	}

	const principal = await kindeAuthClient.getUser(event.request as unknown as SessionManager);

	return {
		principal,
		isAuthenticated
	};
};
