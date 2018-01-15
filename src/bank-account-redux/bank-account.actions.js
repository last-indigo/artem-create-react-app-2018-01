const actionsEnum = {
    MY_BANK_ACCOUNT_ACTION: 'MY_BANK_ACCOUNT_ACTION',
    LOG_ADD_ENTRY: 'LOG_ADD_ENTRY',
};

export default actionsEnum;

export const actionCreators = {
    MY_BANK_ACCOUNT_ACTION: (payload) => {
        return {
            // Error: Actions may not have an undefined "type" property. Have you misspelled a constant?
            type: actionsEnum.MY_BANK_ACCOUNT_ACTION,
            
            payload
        }   
    },
    LOG_ADD_ENTRY: (...args) => (
        {
            type: actionsEnum.LOG_ADD_ENTRY,
            TODODODDODODODOD_ARGS: args
        }
    )
}