import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  getProductRequest: ['data'],
  getProductSuccess: ['data'],
  getProductFailure: ['data'],
});

export const GetProductTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  data: null,
});

/* ------------- Selectors ------------- */

export const getProductSelectors = {
  getData: state => state.data,
};

/* ------------- Reducers ------------- */

// request  for a product
export const request = (state, {data}) =>
  state.merge({fetching: true, product: null, avatar: null});

// successful
export const success = (state, action) => {
  const {data} = action;
  return state.merge({fetching: false, error: null, product: data.products[0]});
};

// failed to get the product
export const failure = (state, action) =>
  state.merge({fetching: false, error: action.data, product: null});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PRODUCT_REQUEST]: request,
  [Types.GET_PRODUCT_SUCCESS]: success,
  [Types.GET_PRODUCT_FAILURE]: failure,
});
