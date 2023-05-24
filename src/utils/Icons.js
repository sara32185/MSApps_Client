import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PreviewIcon from '@mui/icons-material/Preview';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export const icons = {
    prevIcon: ArrowBackIosIcon,
    nextIcon: ArrowForwardIosIcon,
}

export const iconsAndColors = {
    likes: {
        name: ThumbUpOffAltIcon,
        color: 'primary'
    },
    comments: {
        name: ChatBubbleOutlineIcon,
        color: 'secondary'
    },
    downloads: {
        name: FileDownloadIcon,
        color: 'error'
    },
    views: {
        name: PreviewIcon,
        color: 'warning'
    },
    collections:
    {
        name: LibraryBooksIcon,
        color: 'success'
    },

} 