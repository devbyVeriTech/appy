import { writable } from "svelte/store"

export const socialLinks = writable ([
    {
        name: "facebook",
        image: "./facebook_selected.png",
    },
    {
        name: "youtube",
        image: "./youtube_selected.png",
    },
    {
        name: "spotify",
        image: "./spotify_selected.png",
    },
    {
        name: "audiomack",
        image: "./audiomack_selected.png",
    },
    {
        name: "deezer",
        image: "./deezer_selected.png",
    },

])