import {writable} from "svelte/store";

export const musicList = writable ([
	// {
	// 	id:"1",
	// 	image:"Lover.webp",
	// 	audio:"Lover.wav",
	// 	name:"Lover",
	// 	artist:"Cherrydee",
	// 	genre: "Afrobeat",
	// 	bpm: "100",
	// 	key: "Cm",
	// 	tag: [" Wizkid", " Skepta",]
	// },	
	{
		id:"2",
		image:"Trench.webp",
		audio:"Trench.mp3",
		name:"Trench",
		artist:"Cherrydee",
		genre: "Afrobeat",
		bpm: "106",
		key: "Cm",
		tag: [" Wizkid", " Skepta",]
	},
	{
		id:"3",
		image:"Emotions.webp",
		audio:"Emotions.mp3",
		name:"Emotions",
		artist:"Cherrydee",
		genre: "Afrobeat",
		bpm: "100",
		tag: ["Rema", "Wizkid",]
	},
	{
		id:"4",
		image:"Summer.webp",
		audio:"Summer.mp3",
		name:"Summer",
		artist:"Cherrydee",
		genre: "Afrobeat",
		bpm: "100",
		tag: ["Wizkid", "Tems"]
	},
	{
		id:"5",
		image:"OverThem.webp",
		audio:"OverThem.mp3",
		name:"Over Them",
		artist:"Cherrydee",
		genre: "Afrobeat",
		bpm: "106",
		tag: ["Wizkid", "CKay"]
	},	
	{
		id:"6",
		image:"Special.webp",
		audio:"Special.mp3",
		name:"Special",
		artist:"Cherrydee",
		genre: "Afrobeat",
		bpm: "103",
		tag: ["Kida Kudz", "Wizkid",]
	},
	{
		id:"7",
		image:"WestSide.webp",
		audio:"Westside.mp3",
		name:"West Side",
		artist:"Cherrydee",
		genre: "Afrobeat",
		bpm: "101",
		tag: ["Asake", " Wizkid",]
	},
]
);