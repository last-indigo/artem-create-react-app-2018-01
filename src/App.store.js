import { createStore } from 'redux'
import newRootReducerObjectCompositionDanAbramov from './App.reducer'

export const preloadedState = {
    currentBalanceUSD: 0
};

export const myFirstStore = createStore(newRootReducerObjectCompositionDanAbramov, preloadedState, /* enhancerFn */);
