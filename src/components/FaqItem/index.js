// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachItem} = props
  const {questionText, answerText} = eachItem

  return (
    <li className="item-container">
      <p className="question"> {questionText} </p>
    </li>
  )
}

export default FaqItem
