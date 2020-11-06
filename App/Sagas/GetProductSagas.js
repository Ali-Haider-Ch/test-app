import {call, put} from 'redux-saga/effects';
import GetProductActions from '../Redux/GetProductsRedux';

export function* getProduct(api, action) {
  const {data} = action;
  // make the call to the api
  const response = yield call(api.getProducts, data);
  console.log(response);
  if (response.ok) {
    yield put(GetProductActions.getProductSuccess(response.data));
  } else if (
    response.problem === 'NETWORK_ERROR' ||
    response.problem === 'TIMEOUT_ERROR'
  ) {
    yield put(
      GetProductActions.getProductFailure(
        'There is a network problem. Please try again.',
      ),
    );
  } else {
    yield put(GetProductActions.getProductFailure(response.data.msg));
  }
}
