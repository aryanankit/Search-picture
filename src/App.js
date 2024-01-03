import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import searchImages from "./api";
import ImageList from './components/ImageList'
import { Vortex } from 'react-loader-spinner';


const App = () => {
    const [images, setImages] = useState([]);
    const [isFetching, setIsfetching ]  = useState(false);
    const handleSubmit = async (term) => {
        setImages([]);
        setIsfetching(true);
        const result = await searchImages(term)
        .then((res) => {
            setIsfetching(false);
            setImages(res);
            return res;
        }).catch((err) =>{
            setIsfetching(false);
            console.log(err);
        })
        setImages(result)
    }
    return (
        <div>
            <div>
                <SearchBar onSubmit={handleSubmit} />
                <center>
                    <Vortex
                        visible={isFetching}
                        height="150"
                        width="150"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                </center>
                <ImageList images={images} />
            </div>
        </div>
    )
}

export default App