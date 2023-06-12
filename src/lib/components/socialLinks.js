import { writable } from "svelte/store"

export const socialLinks = writable ([
    {
        name: "youtube",
        image: "./youtube_selected.png",
        url: "https://youtube.com/@iamcherrydee",
    },
    {
        name: "apple music",
        image: "./Apple_Music_(10).png",
        url: "https://music.apple.com/ng/artist/cherrydee/1475205914",
        size: "12px",
    },
    {
        name: "spotify",
        image: "./spotify_selected.png",
        url: "https://open.spotify.com/artist/0fydt8iU2LPk8XfNBn84wS",
    },
    {
        name: "audiomack",
        image: "./audiomack_selected.png",
        url: "https://audiomack.com/iamcherrydee",
    },
    {
        name: "deezer",
        image: "./deezer_selected.png",
        url: "https://www.deezer.com/en/artist/68398052",
    },
    {
        name: "facebook",
        image: "./Facebook-Logo-PNG5(1).png",
        url: "https://facebook.com/cherrydee.onthebeat",
        size: "20px",
    },
])