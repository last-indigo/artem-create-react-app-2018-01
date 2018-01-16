import React from 'react'

export class BankAccountComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>HI I AM BANK ACCOUNT</h1>
                <h2>State is: {this.props.state}</h2>
                <button onClick={this.props.onDepositMoney}>
                    Deposit smth
                </button>
                <button onClick={this.props.onWithdrawMoney}>
                    Withdraw smth
                </button>
            </div>
        )
    }
} 