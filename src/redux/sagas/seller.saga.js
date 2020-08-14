import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions

function* addSkill(action) {
  try {
    yield axios.post('/api/user/seller/skills', action.payload);
    yield put({ type: 'FETCH_USER' });
  } catch (error) {
    console.log('Add seller skill post request failed', error);
  }
}

function* addSeller(action) {
  try {
    yield axios.post('/api/user/seller', action.payload);
    console.log(action.payload);
    const response = yield axios.get(
      `/api/user/seller/${action.payload.userId}`
    );
    yield put({ type: 'SET_SELLER', payload: response.data });
  } catch (error) {
    console.log('Add seller post request failed', error);
  }
}

function* sellerSaga() {
  yield takeLatest('ADD_SKILL', addSkill);
  yield takeLatest('ADD_SELLER', addSeller);
}

export default sellerSaga;
