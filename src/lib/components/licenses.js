import {writable} from "svelte/store";

export const licenses = writable ([
	{
		name:"MP3 + WAV",
		files:"MP3 and WAV",
		price: "45",
		usage: 
		[	
			"Demo Only", 
			"Tagged once",
			"No digital platform distribution",
			"Must credit (Prod. Cherrydee)",
			"No music video",
			"Cherrydee maintains full ownership of the instrumental",
		],
	},

	{
		name:"Premium",
		files:"MP3, WAV and TRACK STEMS",
		price: "75",
		usage: 
		[
			"Commercial Use",
			"Tagged once",
			"Distribute to Digital platforms",
			"Must credit (Prod. Cherrydee)",
			"Up to 5000 monetized streams",
			"Cherrydee maintains full ownership of the instrumental",
		],
	},

	{
		name:"Exclusive",
		files:"MP3, WAV and TRACK STEMS",
		price: "200",
		usage: 
		[
			"Professional Use",
			"Tagged once",
			"Distribute to Digital platforms",
			"Must credit (Prod. Cherrydee)",
			"Up to 10000 monetized streams",
			"Cherrydee maintains full ownership of the instrumental",
		],
	},

	{
		name:"Unlimited",
		files:"Everything ",
		price: "1000",
		usage: ["Everything"],
	},

]
);