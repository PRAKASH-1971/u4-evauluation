import {all} from 'redux-saga/effects'
import watcherSaga from './Redux/saga'



export default function* rootSaga() {
    yield all([
        watcherSaga()
    ])
}