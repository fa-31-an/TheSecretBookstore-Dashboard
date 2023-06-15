const BASE_EDITORIALS_URL_API = "http://localhost:3030/api/editorials"

export const getEditorials = async () => {
    try {
        const response = await fetch(BASE_EDITORIALS_URL_API);
        const json = await response.json();
        return json;
        
    } catch (error) {
        console.error("Error while fetching editorials");
        return Promise.reject("Error while fetching editorials")
    }
}