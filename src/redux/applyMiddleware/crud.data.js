import axios from 'axios';
import actions from '../actions';
import { BASE_URL, PIXABAY_URL } from '../../config/Configurations';

export const getPaginationData = ({ dispatch, getState }) => next => action => {

    if (action.type === "GET_PAGINATION_DATA") {
        return axios(`${BASE_URL}pagination/paginationData`,
            {
                method: 'POST',
                data: {
                    data: getState().DataReducer.allData.hits,
                    page: getState().DataReducer.page,
                    limit: 9,
                    action: action.payload?.action || null,
                    total: getState().DataReducer.total
                }
            }
        )
            .then(response => {
                const { data, page, disableNext, disablePrev } = response.data
                dispatch(actions.setCurrentData(data))
                dispatch(actions.setPage(page))
                dispatch(actions.setDisableNext(disableNext))
                dispatch(actions.setDisablePrev(disablePrev))
            })
            .catch(error => {
                console.log(error);
            });
    }

    return next(action)
}

export const sortImagesByKey = ({ dispatch, getState }) => next => action => {

    if (action.type === "SORT_IMAGES_BY_KEY") {
        return axios(`${BASE_URL}sort/sortByKey/id`,
            {
                method: 'POST',
                data: {
                    data: getState().DataReducer.allData.hits,
                }
            }
        )
            .then(response => {

            })
            .catch(error => {
                console.log(error);
            });
    }

    return next(action)
}

export const getData = ({ dispatch, getState }) => next => action => {
    const CATEGORY = action.payload;

    if (action.type === "GET_DATA") {
        return fetch(`${PIXABAY_URL}${CATEGORY}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                dispatch(actions.setAllData(data))
                dispatch(actions.setTotal(data.hits.length))
                dispatch(actions.getPaginationData())
            })
    }

    return next(action)
}









