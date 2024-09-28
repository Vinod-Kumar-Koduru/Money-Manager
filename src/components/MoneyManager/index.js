import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    type: '',
    history: [],
    title: '',
    amount: '',
    balanceAmount: 0,
    incomeAmount: 0,
    expensesAmount: 0,
  }

  addEle = event => {
    event.preventDefault()
    const {
      title,
      amount,
      type,
      history,
      balanceAmount,
      incomeAmount,
      expensesAmount,
    } = this.state
    const amountPrase = parseInt(amount)
    if (type === 'Income') {
      this.setState(prev => ({
        balanceAmount: (prev.balanceAmount = +amountPrase),
        incomeAmount: (prev.incomeAmount = +amount),
      }))
    } else {
      this.setState(prev => ({
        balanceAmount: prev.balanceAmount - amount,
        expensesAmount: (prev.expensesAmount = +amount),
      }))
    }
    const newHistoryEle = {
      uniq: v4(),
      title,
      amount,
      type,
    }
    this.setState(prev => ({
      history: [...prev.history, newHistoryEle],
      amount: '',
      title: '',
    }))
  }

  titleEle = event => {
    this.setState({title: event.target.value})
  }

  amountEle = event => {
    this.setState({amount: event.target.value})
  }

  typeEle = event => {
    this.setState({type: event.target.value})
  }

  removeEle = uniq => {
    const {history} = this.state
    const filterdata = history.filter(each => each.uniq === uniq)
    const {amount, type} = filterdata[0]
    console.log(type)
    const amountPra = parseInt(amount)
    if (type === 'Expenses') {
      this.setState(prev => ({
        balanceAmount: prev.balanceAmount + amountPra,
        expensesAmount: prev.expensesAmount - amountPra,
      }))
    } else {
      this.setState(prev => ({
        balanceAmount: (prev.balanceAmount = -amountPra),
        incomeAmount: (prev.incomeAmount = -amountPra),
      }))
    }
    const newDateList = history.filter(each => each.uniq !== uniq)
    console.log(newDateList)
    this.setState({history: newDateList})
  }

  render() {
    const {
      title,
      amount,
      type,
      history,
      balanceAmount,
      incomeAmount,
      expensesAmount,
    } = this.state

    return (
      <>
        <div>
          <div className="bg-header">
            <h1 className="palce-heading">Hi,Richard</h1>
            <p className="paragraph-ele">
              Welcome back to your{' '}
              <span className="span-Ele">Money Manager</span>
            </p>
          </div>
          <div className="money-details">
            <MoneyDetails
              balanceAmount={balanceAmount}
              expensesAmount={expensesAmount}
              incomeAmount={incomeAmount}
            />
          </div>
          <div className="history-flex-container">
            <form className="form-bg-container" onSubmit={this.addEle}>
              <h1 className="form-heading">Add Transaction</h1>
              <label className="label-element" htmlFor="title">
                TITLE
              </label>
              <br />
              <input
                type="text"
                className="input-element"
                id="title"
                onChange={this.titleEle}
              />
              <br />
              <label className="label-element" htmlFor="amount">
                AMOUNT
              </label>
              <br />
              <input
                type="text"
                className="input-element"
                id="amount"
                onChange={this.amountEle}
              />
              <br />
              <label className="label-element" htmlFor="Type">
                TYPE
              </label>
              <br />
              <select onClick={this.typeEle}>
                {transactionTypeOptions.map(each => (
                  <option
                    value={each.displayText}
                    id={each.optionId}
                    key={each.optionId}
                  >
                    {each.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="form-heading">History</h1>
              <ul className="unorder-list">
                <li className="list-elemet">
                  <p className="title-history-ele">Title</p>
                  <p className="title-history-ele">Amount</p>
                  <p className="title-history-ele">Type</p>
                </li>
                {history.map(each => (
                  <TransactionItem
                    each={each}
                    key={each.uniq}
                    removeEle={this.removeEle}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default MoneyManager
