import {writable} from "svelte/store";

export const services = writable ([
	{
		id:"1",
		name:"Mixing and mastering",
		image:"mixing-and-mastering.webp",
        price:"$200",
        description:"",
		url:"/services/mixing-and-mastering",
	},

    {
		id:"2",
		name:"Custom Beat Making",
		image:"custom-beats.webp",
        price:"$500",
        description:"",
		url:"/services/custom-beat-making",

	},

    {
		id:"1",
		name:"Song writing",
		image:"song-writing.webp",
        price:"$1000",
        description:"",
		url:"/services/song-writing",

	},

]
);