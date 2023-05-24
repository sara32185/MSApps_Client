import * as React from 'react';
import ImageDetails from './ImageDetails'
import { BL } from '../Hooks'
import { StyledImageListItem, StyledImageListItemBar } from './Style'
import ImageDetailsFooter from './ImageDetailsFooter';

const SingleImage = (props) => {

    const { item } = props;
    const {
        _setOpenModal
    } = BL()

    return (

        <StyledImageListItem
            key={item.img}
            onClick={() => {
                _setOpenModal(
                    {
                        open: true,
                        data: {
                            ContentComponent: () => { return <ImageDetails item={item} /> },
                            FooterComponent: () => { return <ImageDetailsFooter item={item} /> }
                        }
                    }
                )
            }}
        >
            <div className='wrap-image'>
                <img
                    src={`${item.previewURL}`}
                    srcSet={`${item.previewURL}`}
                    loading="lazy"
                />
            </div>
            <StyledImageListItemBar
                title={item.id}
                subtitle={<span>by: {item.user}</span>}
                position="below"
            />
        </StyledImageListItem >
    );
}

export default SingleImage