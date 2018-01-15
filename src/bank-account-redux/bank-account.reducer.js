import actionsEnum from './bank-account.actions'

export default function bankAccountReducer(state, action) {
    const actionTypesToReactionsMappings = {
        [actionsEnum.MY_BANK_ACCOUNT_ACTION]: () => ({
            ...state,
            currentBalanceUSD: (state.currentBalanceUSD || 0) + action.payload.depositAmountUSD
        })
    }

    const fn = actionTypesToReactionsMappings[action.type];
    if (!fn) {
        // caused by @@redux/INIT and others
        console.warn('no function was found inside the reducer for action of type:', action.type);
        return state;
    }
    const transformedStateImmutable = fn(state, action);
    return transformedStateImmutable;
};