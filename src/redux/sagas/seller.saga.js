import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions

function* addSkill(action) {
  try {
    console.log('action.payload:', action.payload);
    yield axios.post('/api/user/seller/skills', action.payload);
    yield put({ type: 'FETCH_USER' });
    yield put({ type: 'GET_SKILLS', payload: action.payload.userId });
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

function* getAllListings(action) {
  try {
    const response = yield axios.get(`/api/user/seller`);
    yield put({ type: 'SET_LISTINGS', payload: response.data });
  } catch (error) {
    console.log('getAllListings error', error);
  }
}

function* getListingsByName(action) {
  try {
    const response = yield axios.get(`/api/user/name`);
    yield put({ type: 'SET_LISTINGS', payload: response.data });
  } catch (error) {
    console.log('getListingsByName error', error);
  }
}

function* getListingsByPrice(action) {
  try {
    const response = yield axios.get(`/api/user/price`);
    yield put({ type: 'SET_LISTINGS', payload: response.data });
  } catch (error) {
    console.log('getListingsByPrice error', error);
  }
}

function* sellerSaga() {
  yield takeLatest('ADD_SKILL', addSkill);
  yield takeLatest('GET_SKILLS', getSkills);
  yield takeLatest('GET_ALL_LISTINGS', getAllListings);
  yield takeLatest('DELETE_SKILL', deleteSkill);
  yield takeLatest('GET_LISTINGS_BY_NAME', getListingsByName);
  yield takeLatest('GET_LISTINGS_BY_PRICE', getListingsByPrice);
}

export default sellerSaga;
