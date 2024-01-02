import axios from "axios";

const searchImages = async (term) => {
    const respone = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID bGbOPQ9HF-1YHvw2VUY9WPR3PfbaXOxr56qokQa-bpg'
        },
        params: {
            query: term,
        }
    })

    return respone.data.results;
}

export default searchImages;