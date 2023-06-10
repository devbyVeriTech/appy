import {writable} from "svelte/store";

export const paymentMethod = writable ([
    {
        name: "Paypal",
        image: "./paystack-logo.svg",
        url: "https://www.paypal.com",
        class: "paypal",
    },
    {
        name: "Flutterwave",
        image: "./flutterwave-logo.svg",
        url: "https://www.flutterwave.com",
        class: "flutter",

    },
    {
        name: "Paystack",
        image: "./paystack-logo.svg",
        url: "https://www.paystack.com",
        class: "stack",

    }

])