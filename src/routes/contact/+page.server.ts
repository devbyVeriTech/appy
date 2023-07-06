// import type { Actions } from "../$types";

// /** @type {import('./$types').PageServerLoad} */
// export async function load() {
//     return {};
// };


// export const actions: Actions = {
//     default: async ({locals, request}) => {
//         const data = Object.fromEntries(await request.formData()) as{
//             name: string;
//             email: string;
//             subject: string;
//             message: string;

//         };

//         try {
//             await locals.pb.collection('contact').create(data);
//         } catch (e){
//             console.error(e);
//             throw e
//         }

//     }
// }