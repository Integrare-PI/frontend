import {createStore} from 'redux';
import { tokensReducer } from './tokens/UserReducer';

const store = createStore(tokensReducer);

export default store