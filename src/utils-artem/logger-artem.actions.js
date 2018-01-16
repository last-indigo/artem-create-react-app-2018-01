export const appUtilActionsEnum = {
    ADD_ENTRY_TO_APP_LOG: 'ADD_ENTRY_TO_APP_LOG',
}

export const appUtilActionCreators = {
    addEntryToAppLog: (...args) => (
        {
            type: appUtilActionsEnum.ADD_ENTRY_TO_APP_LOG,
            loggerMessagesAsIterable: args
        }
    )
}