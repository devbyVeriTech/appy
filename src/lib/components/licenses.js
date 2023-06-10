import {writable} from "svelte/store";

export const licenses = writable ([
	{
		name:"MP3 + WAV",
		files:"MP3 and WAV",
		price: "45",
		usage: 
		[	
			"Demo Only", 
			"No digital platform distribution",
			"No monetization",
			"No music video",
			"No paid performances"
		],
	},

	{
		name:"Premium",
		files:"MP3, WAV and TRACK STEMS",
		price: "75",
		usage: 
		[
			"Commercial Use",
			"Distribute to Digital platforms",
			"Up to 5000 monetized streams",
			"No music video",
		],
	},

	{
		name:"Exclusive",
		files:"MP3, WAV and TRACK STEMS",
		price: "200",
		usage: 
		[
			"Professional Use",
			"Distribute to Digital platforms",
			"Up to 10000 monetized streams",
			"1 music video"
		],
	},

	{
		name:"Unlimited",
		files:"Everything + beat will be removed from site",
		price: "MAKE AN OFFER",
		usage: ["Everything"],
	},

]
);