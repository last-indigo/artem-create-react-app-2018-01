import { createStore } from 'redux'

import bankAccountReducer from './bank-account.reducer'
import { actionCreators } from './bank-account.actions';

// import { log } from '../utils-artem/logger-artem'
const log = console.log;

const preloadedState = {
    currentBalanceUSD: 1992
};

// const enhancerFn = (next) => {
//     // middleware?
//     return () =>{};
// };

const myFirstStore = createStore(bankAccountReducer, preloadedState, /* enhancerFn */);
log(`myFirstStore.getState(): initial state is`, myFirstStore.getState())

/**
 * listener: () => void
 */
const myActionDispatchListener = () => {
    log('Hello from myActionDispatchListener!');
    log('Current state is', myFirstStore.getState());
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


