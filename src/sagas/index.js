import {put, takeLeading} from 'redux-saga/effects';
import polyline from '@mapbox/polyline'
import request from '../HTTP/httpHooks'

async function getCoordinatesSaga({payload}) {
    const path = await request(`https://router.project-osrm.org/route/v1/driving/${payload.coordinatesFromIng},${payload.coordinatesFromLat};${payload.coordinatesToIng},${payload.coordinatesToLat}?overview=full&geometries=polyline&steps=false`)

    const coordinates = await polyline.decode(path.routes[0].geometry);

    return {coordinates, distance: path.routes[0].distance}
}

export function* workerSaga({payload}) {
    const data = yield getCoordinatesSaga({payload})
    yield put({type: "CHOOSE_PATH", payload: data})
}

export function* watchSaga() {
    yield takeLeading('CHOOSE_PATH', workerSaga);
}

export default function* rootSaga() {
    yield watchSaga();
}