import actionsEnum from './bank-account.actions'
import newUniqueId from '../utils-artem/uuid-generator'

function argsAsLogEntry(...messages) {
    let totalMessage = '';
    for (let msg of messages) {
        totalMessage += msg.toString()
    }
    return {
        message: totalMessage,
        id: newUniqueId()
    };
}

export default function rootReducer(state, action) {
    // TODO: how to split responsibilities into several reducers?
    const actionTypesToReactionsMappings = {

        [actionsEnum.MY_BANK_ACCOUNT_ACTION]: () => ({
            ...state,
            currentBalanceUSD: (state.currentBalanceUSD || 0) + action.payload.depositAmountUSD
        }),

        [actionsEnum.LOG_ADD_ENTRY]: () => {
            const message = argsAsLogEntry(action.TODODODDODODODOD_ARGS);
            const newState = {...state};
            newState.loggerHistory = [message, ...(state.loggerHistory || [])]

            console.warn('actionsEnum.LOG_ADD_ENTRY')
            
            return newState;
        },

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