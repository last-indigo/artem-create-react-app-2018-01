// TODO: this file should be reorganized by responsibility!
import { myFirstStore, preloadedState } from '../App.store';
import { bankAccountActionCreators } from './bank-account.actions';
import { logAsStoreDispatch as log } from '../utils-artem/logger-artem'

// const enhancerFn = (next) => {
//     // middleware?
//     return () =>{};
// };


log(`myFirstStore.getState(): initial state is`, myFirstStore.getState())
console.assert(myFirstStore.getState().loggerHistory.length === log._counter);

/**
 * WARNING:
 * This `onMyStoreChanged` function WILL NOT be called, if someone calls UNSUBSCRIBE returned function!
 * This means any myFirstStore.dispatch will be ignored onwards (no more logs will be added)
 * 
 * listener: () => void
 */
const onMyStoreChanged = () => {
    // TODO: think how to avoid recursive calls due to myFirstStore.subscribe() -> triggers dispatch
    // log('Hello from onMyStoreChanged!');
    // log('Current state is', myFirstStore.getState());
    console.log('subscribe: newState is', myFirstStore.getState());
};
function getRandomDeposit() {
    const multiplicator = 1000;
    return Math.round( Math.random() * multiplicator );
}
const unsubMyStoreChangedListener =
    myFirstStore.subscribe(onMyStoreChanged);

const payloadForMyBankAccountAction = {
    depositAmountUSD: getRandomDeposit()
};
const myAction = bankAccountActionCreators.MY_BANK_ACCOUNT_ACTION(payloadForMyBankAccountAction);


log('Will fire action: myFirstStore.dispatch(myAction)', myAction);
console.assert(myFirstStore.getState().loggerHistory.length === log._counter);
myFirstStore.dispatch(myAction);
log('Did fire action: myFirstStore.dispatch(myAction)', myAction);
console.assert(myFirstStore.getState().loggerHistory.length === log._counter);

const didDepositHappen = 
    myFirstStore.getState().currentBalanceUSD ===
    (preloadedState.currentBalanceUSD + payloadForMyBankAccountAction.depositAmountUSD)
console.assert(didDepositHappen, 'state did not change!')



setTimeout(() => {
    const delayedActionPayload = {
        depositAmountUSD: getRandomDeposit()
    };
    const delayedAction = bankAccountActionCreators.MY_BANK_ACCOUNT_ACTION(delayedActionPayload);
    
    log('Will fire action: myFirstStore.dispatch(myAction)', delayedActionPayload);
    myFirstStore.dispatch(delayedAction);
    log('expect no line for "Hello from onMyStoreChanged!" above ----^');
    log('Current state is', myFirstStore.getState());

    log('Will unsubMyStoreChangedListener()');
    unsubMyStoreChangedListener();
    // Actions are STILL processed through the reducer!
    // Despite unsubMyStoreChangedListener() was called
    log('Did unsubMyStoreChangedListener()');
}, 2000);


