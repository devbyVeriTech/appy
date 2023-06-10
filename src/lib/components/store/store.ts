import {get, writable} from "svelte/store"
import type { Writable } from "svelte/store"

export const selecTags: Writable<string[]> = writable([])

export const setSelecTags = (tag: string) => {
    if (get(selecTags).includes(tag)) {
        selecTags.update(prev) => {
            return prev.filter((t) => t !== tag)
        }
        else{
            selecTags.update(prev) => {
                return [..prev, tag]
        }
    } 
}