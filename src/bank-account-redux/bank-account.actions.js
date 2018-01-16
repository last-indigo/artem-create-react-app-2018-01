export const bankAccountActionsEnum = {
    MONEY_DEPOSIT_REQUESTED: 'MONEY_DEPOSIT_REQUESTED',
};

export const bankAccountActionCreators = {
    depositAmountInUSD: (payload) => {
        return {
            // Error: Actions may not have an undefined "type" property. Have you misspelled a constant?
            type: bankAccountActionsEnum.MONEY_DEPOSIT_REQUESTED,
            
            payload
        }   
    },
}

export function getRandomDeposit() {
    const multiplicator = 1000;
    return Math.round( Math.random() * multiplicator );
}