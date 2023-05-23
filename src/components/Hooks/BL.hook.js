import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import SelectCategory from '../View/SelectCategory'
import { icons } from '../../utils/Icons';

const BL = () => {
    const data = useSelector(state => state.DataReducer.currentData)
    const disablePrev = useSelector(state => state.DataReducer.disablePrev)
    const disableNext = useSelector(state => state.DataReducer.disableNext)

    const dispatch = useDispatch(),
        _getPaginationData = (action) => dispatch(actions.getPaginationData(action)),
        _setOpenModal = (data) => dispatch(actions.setOpenModal(data)),
        _setCategory = (category) => dispatch(actions.setCategory(category))

    const buttonsStruct = {
        prev: {
            name: 'prev',
            onClick: (e) => {
                _getPaginationData({ action: e.currentTarget.name })
            },
            icon: <icons.prevIcon />,
            disabled: disablePrev
        },
        selectCategory: {
            title: "select category",
            onClick: () => {
                _setOpenModal({
                    open: true,
                    data: { ContentComponent: SelectCategory }
                })
            },
            variant: 'contained',
        },
        next: {
            name: 'next',
            onClick: (e) => {
                _getPaginationData({ action: e.currentTarget.name })
            },
            icon: <icons.nextIcon />,
            disabled: disableNext
        },
    }

    return {
        data,
        _getPaginationData,
        disablePrev,
        disableNext,
        _setOpenModal,
        _setCategory,
        buttonsStruct
    }
}

export default BL