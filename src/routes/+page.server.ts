import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";


export const actions: Actions = {
    default: async ({locals, request}) => {
        const data = Object.fromEntries(await request.formData()) as{
            email: string;
            password: string;

        };

        try {
            await locals.pb.collection('users').authWithPassword(data.email, data.password);
            if (locals.pb?.authStore?.model?.verified) {
                locals.pb.authStore.clear();
                throw redirect (303, '/home');
            }

        } catch (e){
            console.error(e);
            throw e;
        }

        throw redirect (303, '/home');
    }

}



