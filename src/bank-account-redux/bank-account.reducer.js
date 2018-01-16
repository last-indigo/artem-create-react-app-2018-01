import { bankAccountActionsEnum } from './bank-account.actions'

/**
 * NOTE: instead of cloning whole state, receive and recreate just own portion of state!
 * this is much cleaner, and SOLID
 * 
 * @param {*} state 
 * @param {*} action 
 */
export default function bankAccountReducer(state = 0, action) {
    /* GOOD: */
    switch (action.type) {
        case bankAccountActionsEnum.MONEY_DEPOSIT_REQUESTED: {
            return state + action.payload.depositAmountUSD
        }
        default: {
            return state;
        }
    }

    /* BAD: */
    // return {
    //     ...state,
    //     currentBalanceUSD: (state.currentBalanceUSD || 0) + action.payload.depositAmountUSD
    // }
}
