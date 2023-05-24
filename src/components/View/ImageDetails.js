import React from 'react'
import {
    Image,
    WrapImageAndDetails,
    WrapImage
} from './Style'

const ImageDetails = (props) => {
    const { item } = props,
        { previewURL } = item;


    return (
        <WrapImageAndDetails>
            <WrapImage>
                <Image src={previewURL} />
            </WrapImage>
        </WrapImageAndDetails>

    )
}

export default ImageDetails