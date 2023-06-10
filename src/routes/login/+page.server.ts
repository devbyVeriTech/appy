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
            if (!locals.pb?.authStore?.model?.verified) {
                locals.pb.authStore.clear();
                return {
                    notVerified: true
                }
            }

        } catch (e){
            console.error(e);
            throw e;
        }

        throw redirect (303, '/home');
    }

    // OAuth2: async ({cookies, url, locals}) =>{
    //     const authMethods = await locals.pb?.collection('users').
    //     listAuthMethods();
    //     if(!authMethods){
    //         return{
    //             authProviders: '',

    //         }
    //     }

    //     const redirectURL = `${url.origin}/oauth`;
    //     const googleAuthProvider = authMethods.authProviders[0];
    //     const authProviderRedirect = `${googleAuthProvider.authUrl}${redirectURL}`;

    //     const state = googleAuthProvider.state;
    //     const verifier = googleAuthProvider.codeVerifier;
    //     cookies.set('state', state);
    //     cookies.set('verifier', verifier);

    //     throw redirect (302, AuthProviderRedirect)
    // }
}



