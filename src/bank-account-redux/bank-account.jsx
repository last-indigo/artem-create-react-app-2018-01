import { createStore } from 'redux'

import rootReducer from './bank-account.reducer'
import { actionCreators } from './bank-account.actions';


const preloadedState = {
    currentBalanceUSD: 1992
};

// const enhancerFn = (next) => {
//     // middleware?
//     return () =>{};
// };

const myFirstStore = createStore(rootReducer, preloadedState, /* enhancerFn */);
// import { log } from '../utils-artem/logger-artem'
// const log = console.log;
let countCalled = 0;
const log = (...args) => {
    console.log('log is called times:', ++countCalled);
    const logAction = actionCreators.LOG_ADD_ENTRY(...args);
    myFirstStore.dispatch(logAction);
};

log(`myFirstStore.getState(): initial state is`, myFirstStore.getState())

/**
 * listener: () => void
 */
const myActionDispatchListener = () => {
    // TODO: think how to avoid recursive calls due to myStore.subscribe() -> triggers dispatch
    // log('Hello from myActionDispatchListener!');
    // log('Current state is', myFirstStore.getState());
    console.log('subscribe: newState is', myFirstStore.getState());
};
function getRandomDeposit() {
    const multiplicator = 1000;
    return Math.round( Math.random() * multiplicator );
}
const unsubMyActionDispatchListener =
    myFirstStore.subscribe(myActionDispatchListener);

const payloadForMyBankAccountAction = {
    depositAmountUSD: getRandomDeposit()
};
const myAction = actionCreators.MY_BANK_ACCOUNT_ACTION(payloadForMyBankAccountAction);


log('Will fire action: myFirstStore.dispatch(myAction)', myAction);
myFirstStore.dispatch(myAction);
log('Did fire action: myFirstStore.dispatch(myAction)', myAction);

const didDepositHappen = 
    myFirstStore.getState().currentBalanceUSD ===
    (preloadedState.currentBalanceUSD + payloadForMyBankAccountAction.depositAmountUSD)
if (!didDepositHappen) {
    throw Error('state did not change!')
}

log('Will unsubMyActionDispatchListener()');
unsubMyActionDispatchListener();
// Actions are STILL processed through the reducer!
// Despite unsubMyActionDispatchListener() was called
log('Did unsubMyActionDispatchListener()');


setTimeout(() => {
    const delayedActionPayload = {
        depositAmountUSD: getRandomDeposit()
    };
    const delayedAction = actionCreators.MY_BANK_ACCOUNT_ACTION(delayedActionPayload);
    
    log('Will fire action: myFirstStore.dispatch(myAction)', delayedActionPayload);
    myFirstStore.dispatch(delayedAction);
    log('expect no line for "Hello from myActionDispatchListener!" above ----^');
    log('Current state is', myFirstStore.getState());
}, 2000);


