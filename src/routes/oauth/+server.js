import { redirect } from "@sveltejs/kit";

export const GET = async ({locals, url, cookies}) => {
    const redirectURL = `${url.origin}/oauth`;
    const expectedState = cookies.get('state');
    const expectedVerifier = cookies.get('expectedVerifier');


    const state = await url.searchParams.get('state');
    const code = await url.searchParams.get('code');
}