import axios from "axios";

const searchImages = async (term) => {
    const respone = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: process.env.REACT_APP_AUTH,
        },
        params: {
            query: term,
        }
    })

    return respone.data.results;
}

export default searchImages;