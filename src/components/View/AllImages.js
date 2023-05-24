import * as React from 'react';
import { ImageList } from '@mui/material';
import { BL } from 'components/Hooks'
import SingleImage from 'components/View/SingleImage'
import { StyledImageList } from './Style'
import { texts } from 'utils/Texts';

const AllImages = (props) => {
    const { data } = BL()
    const text = texts.noImages

    return (
        <StyledImageList >
            {
                data.length > 0 ?

                    data.map((item, index) =>
                        <SingleImage key={index} item={item} />
                    )
                    :
                    <div className='no-image-message'>
                        <h1>{text.title}</h1>
                        <h4>{text.subTilte}</h4>
                    </div>
            }
        </StyledImageList>

    );
}

export default AllImages