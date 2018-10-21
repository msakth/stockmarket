import {createStore, applyMiddleware } from 'redux';
import  rootReducer from '../Reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk, reduxImmutableStateInvariant())
    );
}
