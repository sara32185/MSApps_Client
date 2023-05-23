import {
    createStore,
    applyMiddleware
} from 'redux';

import appReducers from './reducers/appReducers';

import {
    getData,
    getPaginationData,
    sortImagesByKey
} from './applyMiddleware/crud.data';

const store = createStore(
    appReducers,
    applyMiddleware(
        getData,
        getPaginationData,
        sortImagesByKey
    )
)

export default store;