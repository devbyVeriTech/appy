
import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";


export const actions: Actions = {
    update_profile: async ({locals, request}) => {
        const data = Object.fromEntries(await request.formData());

        const formData = new FormData()
        
        formData.append('avatar', data?.avatar);
        formData.append('email', data?.email)
        formData.append('name', data?.name)
        

        try {
            const { name, avatar, username, } = await locals.pb.collection('users').update(locals?.user?.id, formData); 
            locals.user.name = name;
            locals.user.avatar = avatar;
            locals.user.username = username;

            // if (!locals.pb?.collections?.update?.apply){
            //     return {
                    
            //     }
            // }

            // return {
            //     success: true
            // }


        } catch (e){
            console.error(e);
            throw e
        }

        throw redirect (303, '');
    }
}