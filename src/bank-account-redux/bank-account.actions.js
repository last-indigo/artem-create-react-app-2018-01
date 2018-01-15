const actionsEnum = {
    MY_BANK_ACCOUNT_ACTION: 'MY_BANK_ACCOUNT_ACTION',
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
}