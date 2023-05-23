import React from 'react'
import {
    Image,
    WrapDetails,
    WrapDetail,
    StyledBadge,
    WrapImageAndDetails,
    WrapImage
} from './Style'
import { icons } from '../../utils/Icons';

const ImageDetailsFooter = (props) => {
    const { item } = props,
        { previewURL, views, downloads, likes, comments } = item;
    const details = [
        'views', 'downloads', 'likes', 'comments'
    ]

    const returnIcon = (name) => {
        const Icon = icons[name]
        return <Icon />
    }

    return (

        <div className='wrap-details'>

            <WrapDetails>
                {details.map(detail =>
                    <WrapDetail>
                        <div className='wrap-icon'>
                            {returnIcon(detail)}
                        </div>
                        <StyledBadge key={detail} color="secondary" badgeContent={item[detail]} max={999}>
                            <span>{detail}</span>

                        </StyledBadge>
                    </WrapDetail>
                )}

            </WrapDetails >
        </div>

    )
}

export default ImageDetailsFooter