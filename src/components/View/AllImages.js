import * as React from 'react';
import { ImageList } from '@mui/material';
import { BL } from '../Hooks'
import SingleImage from './SingleImage'
import { StyledImageList } from './Style'

const AllImages = (props) => {
    const { data } = BL()
    return (
        <StyledImageList >
            {
                data.length > 0 ?

                    data.map((item, index) =>
                        <SingleImage key={index} item={item} />
                    )
                    :
                    <h1>There are no match images for the selected category</h1>
            }
        </StyledImageList>

    );
}

export default AllImages