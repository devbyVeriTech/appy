import {writable} from "svelte/store";

export const musicList = writable ([
	{
		id:"1",
		image:"Lover.png",
		audio:"Lover.wav",
		name:"Lover",
		artist:"Cherrydee",
		genre: "Afrobeat",
		bpm: "100",
		key: "Cm",
		tag: [" Burna Boy", " Wizkid", " Skepta",]
	},	
	{
		id:"2",
		image:"Trench.png",
		audio:"Trench.mp3",
		name:"Trench",
		artist:"Cherrydee",
		genre: "Afrobeat",
		bpm: "106",
		key: "Cm",
		tag: [" Burna Boy", " Wizkid", " Skepta",]
	},
	{
		id:"3",
		image:"Emotions.png",
		audio:"Emotions.mp3",
		name:"Emotions",
		artist:"Cherrydee",
		genre: "Afrobeat",
		bpm: "100",
		tag: ["Rema", "Wizkid", "Burna Boy"]
	},
	{
		id:"4",
		image:"Summer.png",
		audio:"Summer.mp3",
		name:"Summer",
		artist:"Cherrydee",
		genre: "Afrobeat",
		bpm: "100",
		tag: ["Wizkid", "Burna Boy", "Tems"]
	},
	{
		id:"5",
		image:"OverThem.png",
		audio:"OverThem.mp3",
		name:"Over Them",
		artist:"Cherrydee",
		genre: "Afrobeat",
		bpm: "106",
		tag: ["Wizkid", "Burna Boy", "CKay"]
	},	
	{
		id:"6",
		image:"Special.png",
		audio:"Special.mp3",
		name:"Special",
		artist:"Cherrydee",
		genre: "Afrobeat",
		bpm: "103",
		tag: ["Kida Kudz", "Wizkid", "Burna Boy",]
	},
	{
		id:"7",
		image:"WestSide.png",
		audio:"Westside.mp3",
		name:"West Side",
		artist:"Cherrydee",
		genre: "Afrobeat",
		bpm: "101",
		tag: ["Asake", " Wizkid", " Burna Boy",]
	},
]
);