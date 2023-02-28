// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isIconClicked: false}

  toggleIndicator = () => {
    this.setState(prevState => {
      const {isIconClicked} = prevState
      this.setState({isIconClicked: !isIconClicked})
    })
  }

  render() {
    const {eachItem} = this.props
    const {questionText, answerText} = eachItem
    const {isIconClicked} = this.state

    const resultantView = isIconClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isIconClicked ? 'minus' : 'plus'

    const userInteractionResults = isIconClicked ? (
      <div className="item-container-2">
        <div className="top-result">
          <h1 className="question"> {questionText} </h1>
          <img
            src={resultantView}
            alt={altText}
            className="status-logo"
            onClick={this.toggleIndicator}
          />
        </div>
        <hr className="horizontal-line" />
        <p> {answerText} </p>
      </div>
    ) : (
      <div className="item-container">
        <h1 className="question"> {questionText} </h1>
        <img
          src={resultantView}
          alt={altText}
          className="status-logo"
          onClick={this.toggleIndicator}
        />
      </div>
    )

    return <li>{userInteractionResults}</li>
  }
}

export default FaqItem
