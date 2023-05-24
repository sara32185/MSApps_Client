import React from 'react'
import {
    Image,
    WrapDetails,
    WrapDetail,
    StyledBadge,
} from './Style'
import { iconsAndColors } from 'utils/Icons';

const ImageDetailsFooter = (props) => {
    const { item } = props
    const details = [
        'views', 'downloads', 'likes', 'comments', 'collections'
    ]

    const returnIcon = (name) => {
        const Icon = iconsAndColors[name].name
        return <Icon />
    }

    return (

        <div className='wrap-details'>
            <WrapDetails>
                {details.map(detail =>
                    <WrapDetail key={detail}>
                        <div className='wrap-icon'>
                            {returnIcon(detail)}
                        </div>
                        <StyledBadge key={detail} color={iconsAndColors[detail].color} badgeContent={item[detail]} max={999}>
                            <span>{detail}</span>
                        </StyledBadge>
                    </WrapDetail>
                )}
            </WrapDetails >
        </div>

    )
}

export default ImageDetailsFooter