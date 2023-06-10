

    export const serializeNonPOJOs = (obj) => {
    return structuredClone(obj)
}

    export const imgLink = (collection_name, id, imageUrl):string => {
    return `http://127.0.0.1:8090/api/files/${collection_name}/${id}/${imageUrl}`
}