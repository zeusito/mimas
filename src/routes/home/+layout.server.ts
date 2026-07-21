import { kindeAuthClient, type SessionManager } from '@kinde-oss/kinde-auth-sveltekit';
import type { RequestEvent } from '@sveltejs/kit';

export async function load({ request }: RequestEvent) {
    const isAuthenticated = await kindeAuthClient.isAuthenticated(
        request as unknown as SessionManager
    ); // Boolean: true or false
    if (isAuthenticated) {
        console.log("Authenticated");
    } else {
        console.log("Not authenticated");
    }

    return {
        isAuthenticated
    };
}