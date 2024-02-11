import React from 'react'
import ImageShow from './ImageShow';
import './css/ImageList.css'

//Image list component
const ImageList = ({ images }) => {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    }) 
    return (
        <div className='image-list'>{renderedImages}</div>
    )
}

export default ImageList