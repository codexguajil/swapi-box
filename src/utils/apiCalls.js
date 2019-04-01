export const fetchAnything = async (url) => {
    try {
        const response = await fetch(url)
        const parsedResponse = await response.json()
        return parsedResponse
    } catch(error) {
        return error.message
    }
}