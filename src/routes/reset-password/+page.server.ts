import { redirect } from "@sveltejs/kit";
import type { Actions } from "../login/$types";


export const actions: Actions = {
    default: async ({locals, request}) => {
        const data = Object.fromEntries(await request.formData()) as{
            email: string;
            password: string;
        };

        try {
            await locals.pb.collection('users').requestPasswordReset(data.password) 
                return {
                    success: true
                }
            
        } catch (e){
            console.error(e);
            throw e;
        }

        throw redirect (303, '/home');
    }
}