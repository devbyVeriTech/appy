/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};

import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";


export const actions: Actions = {
    default: async ({locals, request}) => {
        const data = Object.fromEntries(await request.formData()) as{
            title: string;
            body: string;
            picture: string;
            json: string;

        };

        try {
            await locals.pb.collection('posts').create(data);
        } catch (e){
            console.error(e);
            throw e
        }
    }
}