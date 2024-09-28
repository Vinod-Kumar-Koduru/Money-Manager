import './index.css'

const MoneyDetails = props => {
  const {expensesAmount, incomeAmount, balanceAmount} = props
  return (
    <div className="money-details">
      <div className="moneyCard moneyCard-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image-card"
          alt="balance"
        />
        <div>
          <p className="type-money">Your Balance</p>
          <p className="type-money amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="moneyCard moneyCard-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image-card"
          alt="income"
        />
        <div>
          <p className="type-money">Your Income</p>
          <p className="type-money amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="moneyCard moneyCard-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image-card"
          alt="expenses"
        />
        <div>
          <p className="type-money">Your Expenses</p>
          <p className="type-money amount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
