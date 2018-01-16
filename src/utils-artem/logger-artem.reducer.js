import newUniqueId from '../utils-artem/uuid-generator'
import { appUtilActionsEnum } from './logger-artem.actions'

export default function loggerReducer(state = [], action) {
    // if (!bankAccountActionsEnum[action.type]) {
    //     // unknown action type
    //     return state;
    // }
    switch (action.type) {
        case appUtilActionsEnum.ADD_ENTRY_TO_APP_LOG: {
            const newEntry = argsAsLogEntry(...action.loggerMessagesAsIterable)
            return [newEntry, ...state];
            // return [...state]; // TODO: cover this with tests
        }
        default: {
            return state;
        }
    }
}

/**
 * Util formatter function for outputting entries from the log
 * 
 * @param {*} messages 
 */
function argsAsLogEntry(...messages) {
    let totalMessage = '';
    for (let msg of messages) {
        try {
            totalMessage += JSON.stringify(msg);
            console.log(totalMessage);
        } catch(e) {
            try {
                totalMessage += msg.toString()
            } catch(e) {

            }
        }
    }

    const newEntry = {
        message: totalMessage,
        id: newUniqueId()
    };
    return newEntry;
}
