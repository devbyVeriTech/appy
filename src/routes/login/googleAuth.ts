import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";


export const actions: Actions = {
    default: async ({locals, request}) => {
        const data = Object.fromEntries(await request.formData())

        try {
            await locals.pb.collection('users').authWithOAuth2();

        } catch (e){
            console.error(e);
            throw e;
        }

        throw redirect (303, '/home');
    }

}



