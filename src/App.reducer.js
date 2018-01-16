import bankAccountReducer from './bank-account-redux/bank-account.reducer'
import loggerReducer from './utils-artem/logger-artem.reducer'

/**
 * As seen here: https://egghead.io/lessons/react-redux-reducer-composition-with-objects
 * 
 * @param {*} state 
 * @param {*} action 
 */
export default function newRootReducerObjectCompositionDanAbramov(state = {}, action) {
    return {
        currentBalanceUSD: bankAccountReducer(state.currentBalanceUSD /* NOT initialState (0) */, action),
        loggerHistory: loggerReducer(state.loggerHistory /* NOT loggerReducer or initialState !!! */, action),
    };
}


/**
 * EXAMPLE OF A BAD REDUCER IMPLEMENTATION
 */
// export function rootReducer(state, action) {
//     // TODO: how to split responsibilities into several reducers?
//     const actionTypesToReactionsMappings = {
//         [bankAccountActionsEnum.MY_BANK_ACCOUNT_ACTION]: bankAccountReducer,
//         [appUtilActionsEnum.ADD_ENTRY_TO_APP_LOG]: loggerReducer,
//     }

//     const fn = actionTypesToReactionsMappings[action.type];
//     if (!fn) {
//         // caused by @@redux/INIT and others
//         console.warn('no function was found inside the reducer for action of type:', action.type);
//         return state;
//     }
//     const transformedStateImmutable = fn(state, action);
//     return transformedStateImmutable;
// };
