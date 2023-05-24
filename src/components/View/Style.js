import styled from 'styled-components'
import { Badge, ImageList, ImageListItem, ImageListItemBar, Modal } from '@mui/material';

const WrapAllImages = styled.div`
    display:grid !important;
    grid-template-columns:auto auto auto !important;
    max-height:100vh !important;
`

const WrapModal = styled(Modal)`
    .MuiBox-root{
        border: none  !important;
        border-radius: 4px !important;
        min-height: 60vh !important ;
        justify-content: center !important;
    }
`

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        border: '2px solid white',
        padding: '0px 4px',
        right: '-5px',
    },
}));

const WrapImageAndDetails = styled.div`
    display:grid;
`

const WrapDetails = styled.div`
    display:flex;
    column-gap: 45px;
    justify-content: center;    
`
const WrapDetail = styled.div`
    .wrap-icon{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    display:grid;
    grid-template-rows:auto;
`

const Image = styled.img`
    object-fit: contain;
    width: 50%;
    height: auto;
`

const WrapImage = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const StyledImageList = styled(ImageList)`
    display:grid !important;
    grid-template-columns:auto auto auto !important;
    width:70% !important;
    max-height:90vh !important;
    height:90vh !important;
    margin:auto !important;
`
const WrapTextAndInput = styled.div`
     display:grid;
    span{
        padding: 5px;
        font-size: 12px;
    }
`
const StyledImageListItem = styled(ImageListItem)`
        border: 1px solid !important; 
        cursor:pointer !important;
        border-radius: 8px !important;
        height:calc(90vh / 3) !important;
    .wrap-image{
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    img{
        width: 100%;
        height: auto;
        object-fit: scale-down;
    }
`

const StyledImageListItemBar = styled(ImageListItemBar)`
    position: absolute !important;
    bottom: 0 !important;
    background: #FFEB3B !important;
    padding: 0 5px !important;
    margin: 0 !important;
    border-bottom-left-radius: 6px !important;
    border-bottom-right-radius: 6px !important;
`

const WrapViewContent = styled.div`

width: 100%;
display: grid;
.wrap-select-category-btn{
    display:flex;
    justify-content:center;
}
button{
    width:200px !important;
}
`

const WrapView = styled.div`
 display:flex;
`

export {
    WrapAllImages,
    WrapModal,
    Image,
    WrapDetails,
    WrapDetail,
    StyledBadge,
    WrapView,
    WrapImageAndDetails,
    WrapImage,
    StyledImageList,
    StyledImageListItem,
    StyledImageListItemBar,
    WrapViewContent,
    WrapTextAndInput
}