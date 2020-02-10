import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess } from './actions';
//* é uma funcionalidade do JavaScript que se chama Generation. É equivalente ao async.
function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);
  yield put(addToCartSuccess(response.data));
}

export default all([
  // takelatest: se nao termina a chamada a api, adiciona apenas uma vez. Pois, pega a ultima requisicao do usuario apenas, caso ainda, nao tenha terminado.
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);
