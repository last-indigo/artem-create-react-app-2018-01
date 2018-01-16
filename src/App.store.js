import { createStore } from 'redux'
import newRootReducerObjectCompositionDanAbramov from './App.reducer'

export const preloadedState = {
    currentBalanceUSD: 0
};

export const myFirstStore = createStore(
    newRootReducerObjectCompositionDanAbramov,
     preloadedState,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      /* enhancerFn */);
