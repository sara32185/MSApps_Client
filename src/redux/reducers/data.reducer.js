import produce from 'immer';
import createReducer from './reducerUtils';


const initialState = {
    allData: null,
    currentData: null,
    category: 'CATEGORY',
    page: 0,
    total: 0,
    limit: 9,
    disableNext: true,
    disablePrex: true,
    openModal: {
        open: false,
        data: null
    }
}

const data = {
    setAllData(state, action) {
        state.allData = action.payload
    },
    setCategory(state, action) {
        state.category = action.payload
        state.page = 0

    },
    setCurrentData(state, action) {
        state.currentData = action.payload
    },
    setPage(state, action) {
        state.page = action.payload

    },
    setTotal(state, action) {
        state.total = action.payload
    },
    setDisableNext(state, action) {
        state.disableNext = action.payload
    },
    setDisablePrev(state, action) {
        state.disablePrev = action.payload
    },
    setOpenModal(state, action) {
        const { open, data } = action.payload
        state.openModal = {
            open: open,
            data: { ...data }
        }
    }

}

export default produce((state, action) =>
    createReducer(state, action, data), initialState);