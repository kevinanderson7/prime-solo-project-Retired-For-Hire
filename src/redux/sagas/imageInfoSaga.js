import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* updateImageUrl(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    const data = {
      imageUrl: action.payload.avatarPath,
    };
    console.log('Posting image url', action.payload);
    const response = yield axios.put(
      `/api/imageurl/avatar/${action.payload.avatarId}`,
      data,
      config
    );

    yield put({
      type: 'FETCH_USER',
      payload: response.data,
    });
  } catch (error) {
    console.log('Image Url post failed: ', error);
  }
}

function* imageInfoSaga() {
  yield takeLatest('UPDATE_USER_AVATAR', updateImageUrl);
}

export default imageInfoSaga;
