import { put, takeEvery, call } from 'redux-saga/effects'
import actionTypes from './actionTypes'
import axios from 'axios'

const getproducts = () => {
    return axios.get(`https://movie-fake-server.herokuapp.com/products`)
        .then((response) => {
            return response.data.data
        })
}

function* getdataSaga() {
    try {
        const response = yield call(getproducts)
        yield put({
            type: actionTypes.GET_SUCCESS,
            payload: response,
        })
    } catch (e) {
        yield put({ type: actionTypes.GET_FAILURE, payload: 'Error in loading Products' })
    }
}

export default function* watcherSaga() {
    yield takeEvery(actionTypes.GET_REQUEST, getdataSaga)
}