const BASE_GENRES_URL_API = "http://localhost:3030/api/genres"

export const getGenres = async () => {
    try {
        const response = await fetch(BASE_GENRES_URL_API);
        const json = await response.json();
        return json;
        
    } catch (error) {
        console.error("Error while fetching genres");
        return Promise.reject("Error while fetching genres")
    }
}