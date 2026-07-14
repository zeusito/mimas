import { fail, redirect, type Actions } from "@sveltejs/kit";
import { loginSchema } from "$lib/models/login";
import { auth } from "$lib/server/auth";


export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const result = loginSchema.safeParse(Object.fromEntries(data.entries()));

        if (!result.success) {
            return fail(400, { failure: true });
        }

        try {
            await auth.api.signInEmail({
                body: {
                    email: result.data.email,
                    password: result.data.password,
                    callbackURL: '/auth/verification-success'
                }
            });
        } catch (error) {
            console.error(error);
            return fail(400, { failure: true });
        }

        return redirect(302, '/home/dashboard');
    },
} satisfies Actions;