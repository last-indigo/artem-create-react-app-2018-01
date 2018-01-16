import { myFirstStore } from '../App.store';
import { appUtilActionCreators } from '../utils-artem/logger-artem.actions'

/**
 * log()
 * DO NOT CALL it inside store.subscribe! Recursion!
 * @param {*} args 
 */
export function logAsStoreDispatch(...args) {
    myFirstStore.dispatch( appUtilActionCreators.addEntryToAppLog(...args) );
    console.log(myFirstStore.getState())
    logAsStoreDispatch._counter++;
};

/**
 * _counter
 * internal property for assertions (in dev mode)
 */
logAsStoreDispatch._counter = 0;
