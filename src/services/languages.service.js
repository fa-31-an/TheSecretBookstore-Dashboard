 const BASE_LANGUAGES_URL_API = "http://localhost:3030/api/languages"

export const getLanguages = async () => {
    try {
        const response = await fetch(BASE_LANGUAGES_URL_API);
        const json = await response.json();
        return json;
        
    } catch (error) {
        console.error("Error while fetching languages");
        return Promise.reject("Error while fetching languages")
    }
}