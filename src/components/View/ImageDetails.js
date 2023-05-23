import React from 'react'
import {
    Image,
    WrapImageAndDetails,
    WrapImage
} from './Style'
import { icons } from '../../utils/Icons';
import { ImageListItemBar } from '@mui/material';

const ImageDetails = (props) => {
    const { item } = props,
        { previewURL, user, id } = item;


    return (
        <WrapImageAndDetails>
            <WrapImage>
                <Image src={previewURL} />
            </WrapImage>
        </WrapImageAndDetails>

    )
}

export default ImageDetails