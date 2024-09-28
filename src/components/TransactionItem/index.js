import './index.css'

const TransactionItem = pros => {
  const {each, removeEle} = pros
  const {title, amount, type, uniq} = each
  const deleteEle = () => {
    removeEle(uniq)
  }
  return (
    <li className="tansation-contai">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button className="delete-button" onClick={deleteEle}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default TransactionItem
