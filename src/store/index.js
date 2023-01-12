import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

export const store = configureStore({
    reducer,
    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware, stringMiddleware),
    devTools: process.env.NODE_ENV !== "production"
})

sagaMiddleware.run(rootSaga)

export default store;