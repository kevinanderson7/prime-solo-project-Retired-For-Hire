import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions

function* addSkill(action) {
  try {
    console.log('action.payload:', action.payload);
    yield axios.post('/api/user/seller/skills', action.payload);
    yield put({ type: 'FETCH_USER' });
    yield put({ type: 'GET_SKILLS', payload: action.payload });
  } catch (error) {
    console.log('Add seller skill post request failed', error);
  }
}

function* getSkills(action) {
  console.log(action.payload);
  try {
    const response = yield axios.get(
      `/api/user/seller/skills/${action.payload}`
    );
    console.log('response', response);
    yield put({ type: 'SET_SKILLS', payload: response.data });
    console.log(response.data);
  } catch (error) {
    console.log('getSkill error', error);
  }
}

function* deleteSkill(action) {
  console.log(action.payload);
  try {
    yield axios.delete(`/api/user/seller/skills/${action.payload.id}`);
    yield put({
      type: 'GET_SKILLS',
      payload: action.payload.user_id,
    });
  } catch (err) {
    console.log('error in deleteSkill:', err);
  }
}

// function* addSeller(action) {
//   try {
//     yield axios.post('/api/user/seller', action.payload);
//     const response = yield axios.get('/api/user/seller');
//     yield put({ type: 'SET_SELLER', payload: response.data });
//   } catch (error) {
//     console.log('Add seller post request failed', error);
//   }
// }

function* getAllListings(action) {
  try {
    const response = yield axios.get(`/api/user/seller`);
    yield put({ type: 'SET_LISTINGS', payload: response.data });
  } catch (error) {
    console.log('getAllListings error', error);
  }
}

function* sellerSaga() {
  yield takeLatest('ADD_SKILL', addSkill);
  yield takeLatest('GET_SKILLS', getSkills);
  yield takeLatest('GET_ALL_LISTINGS', getAllListings);
  yield takeLatest('DELETE_SKILL', deleteSkill);
  //   yield takeLatest('ADD_SELLER', addSeller);
}

export default sellerSaga;
