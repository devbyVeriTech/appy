
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { pb } from "$lib/pocketbase";


export const actions: Actions = {
    default: async ({locals}) => {
        

        await locals.pb.collection('users').delete(locals?.user?.id); 
        try {
        } catch (e){
            console.error(e);
            throw e
        }

        throw redirect (303, '/signup');
    }
}