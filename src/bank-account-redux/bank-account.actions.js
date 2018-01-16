export const bankAccountActionsEnum = {
    MY_BANK_ACCOUNT_ACTION: 'MY_BANK_ACCOUNT_ACTION',
};

export const bankAccountActionCreators = {
    MY_BANK_ACCOUNT_ACTION: (payload) => {
        return {
            // Error: Actions may not have an undefined "type" property. Have you misspelled a constant?
            type: bankAccountActionsEnum.MY_BANK_ACCOUNT_ACTION,
            
            payload
        }   
    },
}