import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { setError } from "sveltekit-superforms/dist/superValidate";


export const actions: Actions = {
    default: async ({locals, request}) => {
        const data = Object.fromEntries(await request.formData()) as{
            username: string;
            email: string;
            country: string;
            password: string;
            passwordConfirm: string;

        };

        try {
            await locals.pb.collection('users').create(data);
            await locals.pb.collection('users').requestVerification(data.email);
        } catch (e){
            console.error(e);
            throw e
        }

        // const form = await superValidate(request, schema);

        // if (locals.pb.collection('users').find({ where: { email: data.email}})){
        //     return setError(form, 'data.email', 'Email already exists')
        // }

        throw redirect (303, '/login');
    }
}